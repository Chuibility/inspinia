<#@ template language="C#" HostSpecific="True" Debug="True" #>
<#@ output extension="cs" #>
<#@ assembly name="System.ComponentModel.DataAnnotations" #>
<#@ assembly name="System.Core" #>
<#@ assembly name="System.Data.Entity" #>
<#@ assembly name="System.Data.Linq" #>
<#@ assembly name="EnvDTE" #>
<#@ ScaffoldingAssembly Processor="ScaffoldingAssemblyLoader" #>
<#
var routePrefix = String.Empty;
if (!String.IsNullOrWhiteSpace(AreaName)) {
    routePrefix = "/" + AreaName;
}
routePrefix += "/" + ControllerRootName + "/";
#>
<#@ import namespace="System.Collections" #>
<#@ import namespace="System.Collections.Generic" #>
<#@ import namespace="System.Linq" #>
<#@ import namespace="Microsoft.AspNet.Scaffolding.Core.Metadata" #>
<#@ parameter type="System.String" name="ControllerName" #>
<#@ parameter type="System.String" name="ControllerRootName" #>
<#@ parameter type="System.String" name="Namespace" #>
<#@ parameter type="System.String" name="AreaName" #>
<#@ parameter type="System.String" name="ContextTypeName" #>
<#@ parameter type="System.String" name="ModelTypeName" #>
<#@ parameter type="System.String" name="ModelVariable" #>
<#@ parameter type="Microsoft.AspNet.Scaffolding.Core.Metadata.ModelMetadata" name="ModelMetadata" #>
<#@ parameter type="System.Boolean" name="UseAsync" #>
<#@ parameter type="System.Boolean" name="IsOverpostingProtectionRequired" #>
<#@ parameter type="System.String" name="BindAttributeIncludeText" #>
<#@ parameter type="System.String" name ="OverpostingWarningMessage" #>
<#@ parameter type="System.Collections.Generic.HashSet<System.String>" name="RequiredNamespaces" #>
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
<# if (UseAsync) { #>
using System.Threading.Tasks;
<# } #>
using System.Net;
using System.Web;
using System.Web.Mvc;
<# foreach (var namespaceName in RequiredNamespaces) { #>
using <#= namespaceName #>;
<# } #>

namespace <#= Namespace #>
{
<#
    var contextTypeName = ContextTypeName;
    var entitySetName = ModelMetadata.EntitySetName;
    var entitySetVariable = entitySetName.ToLowerInvariant();
    var primaryKeyName = ModelMetadata.PrimaryKeys[0].PropertyName;
    var primaryKeyShortTypeName = ModelMetadata.PrimaryKeys[0].ShortTypeName;
    var primaryKeyDefaultValue = ModelMetadata.PrimaryKeys[0].DefaultValue;
    var primaryKeyType = ModelMetadata.PrimaryKeys[0].TypeName;
    var primaryKeyNullableTypeName = GetNullableTypeName(primaryKeyType, primaryKeyShortTypeName);
    var lambdaVar = ModelVariable[0];
    var relatedProperties = ModelMetadata.RelatedEntities.ToDictionary(item => item.AssociationPropertyName);

    string bindAttribute;
    if (IsOverpostingProtectionRequired)
    {
        bindAttribute = String.Format("[Bind(Include=\"{0}\")] ", BindAttributeIncludeText);
    }
    else
    {
        bindAttribute = String.Empty;
    }
#>
    public class <#= ControllerName #> : Controller
    {
        private <#= ContextTypeName #> db = new <#= ContextTypeName #>();

        // GET: <#= routePrefix #>
<# if (UseAsync) { #>
        public async Task<ActionResult> Index()
<# } else { #>
        public ActionResult Index()
<# } #>
        {
<#  var includeExpressions = "";
        includeExpressions = String.Join("", relatedProperties.Values.Select(property => String.Format(".Include({0} => {0}.{1})", lambdaVar, property.AssociationPropertyName)));
#>
<# if(!String.IsNullOrEmpty(includeExpressions)) { #>
            var <#= entitySetVariable #> = db.<#= entitySetName #><#= includeExpressions #>;
<#		if (UseAsync) { #>
            return View(await <#= entitySetVariable #>.ToListAsync());
<#		} else { #>
            return View(<#= entitySetVariable #>.ToList());
<#		} #>
<# } else { #>
<#		if (UseAsync) { #>
            return View(await db.<#= entitySetName #><#= includeExpressions #>.ToListAsync());
<#		} else { #>
            return View(db.<#= entitySetName #><#= includeExpressions #>.ToList());
<#		} #>
<# } #>
        }

        // GET: <#= routePrefix #>Details/5
<# if (UseAsync) { #>
        public async Task<ActionResult> Details(<#= primaryKeyNullableTypeName #> id)
<# } else { #>
        public ActionResult Details(<#= primaryKeyNullableTypeName #> id)
<# } #>
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
<# if (UseAsync) { #>
            <#= ModelTypeName #> <#= ModelVariable #> = await db.<#= entitySetName #>.FindAsync(id);
<# } else { #>
            <#= ModelTypeName #> <#= ModelVariable #> = db.<#= entitySetName #>.Find(id);
<# } #>
            if (<#= ModelVariable #> == null)
            {
                return HttpNotFound();
            }
            return View(<#= ModelVariable #>);
        }

        // GET: <#= routePrefix #>Create
        public ActionResult Create()
        {
<# foreach (var property in relatedProperties.Values) { #>
            ViewBag.<#= property.ForeignKeyPropertyNames[0] #> = new SelectList(db.<#= property.EntitySetName #>, "<#= property.PrimaryKeyNames[0] #>", "<#= property.DisplayPropertyName #>");
<# } #>
            return View();
        }

        // POST: <#= routePrefix #>Create
<# if (IsOverpostingProtectionRequired) {
    foreach (var line in OverpostingWarningMessage.Split(new string[] { Environment.NewLine }, StringSplitOptions.None)) { 
#>
        // <#= line #>
<# } } #>
        [HttpPost]
        [ValidateAntiForgeryToken]
<# if (UseAsync) { #>
        public async Task<ActionResult> Create(<#= bindAttribute #><#= ModelTypeName #> <#= ModelVariable #>)
<# } else { #>
        public ActionResult Create(<#= bindAttribute #><#= ModelTypeName #> <#= ModelVariable #>)
<# } #>
        {
            if (ModelState.IsValid)
            {
<# if(!String.IsNullOrEmpty(primaryKeyType) && String.Equals("System.Guid", primaryKeyType, StringComparison.OrdinalIgnoreCase)) { #>
                <#= ModelVariable #>.<#= primaryKeyName #> = Guid.NewGuid();
<# } #>
                db.<#= entitySetName #>.Add(<#= ModelVariable #>);
<# if (UseAsync) {#>
                await db.SaveChangesAsync();
<# } else { #>
                db.SaveChanges();
<# } #>
                return RedirectToAction("Index");
            }

<# foreach (var property in relatedProperties.Values) { #>
            ViewBag.<#= property.ForeignKeyPropertyNames[0] #> = new SelectList(db.<#= property.EntitySetName #>, "<#= property.PrimaryKeyNames[0] #>", "<#= property.DisplayPropertyName #>", <#= ModelVariable #>.<#= property.ForeignKeyPropertyNames[0] #>);
<# } #>
            return View(<#= ModelVariable #>);
        }

        // GET: <#= routePrefix #>Edit/5
<# if (UseAsync) { #>
        public async Task<ActionResult> Edit(<#= primaryKeyNullableTypeName #> id)
<# } else { #>
        public ActionResult Edit(<#= primaryKeyNullableTypeName #> id)
<# } #>
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
<# if (UseAsync) { #>
            <#= ModelTypeName #> <#= ModelVariable #> = await db.<#= entitySetName #>.FindAsync(id);
<# } else { #>
            <#= ModelTypeName #> <#= ModelVariable #> = db.<#= entitySetName #>.Find(id);
<# } #>
            if (<#= ModelVariable #> == null)
            {
                return HttpNotFound();
            }
<# foreach (var property in relatedProperties.Values) { #>
            ViewBag.<#= property.ForeignKeyPropertyNames[0] #> = new SelectList(db.<#= property.EntitySetName #>, "<#= property.PrimaryKeyNames[0] #>", "<#= property.DisplayPropertyName #>", <#= ModelVariable #>.<#= property.ForeignKeyPropertyNames[0] #>);
<# } #>
            return View(<#= ModelVariable #>);
        }

        // POST: <#= routePrefix #>Edit/5
<# if (IsOverpostingProtectionRequired) {
    foreach (var line in OverpostingWarningMessage.Split(new string[] { Environment.NewLine }, StringSplitOptions.None)) { 
#>
        // <#= line #>
<# } } #>
        [HttpPost]
        [ValidateAntiForgeryToken]
<# if (UseAsync) { #>
        public async Task<ActionResult> Edit(<#= bindAttribute #><#= ModelTypeName #> <#= ModelVariable #>)
<# } else { #>
        public ActionResult Edit(<#= bindAttribute #><#= ModelTypeName #> <#= ModelVariable #>)
<# } #>
        {
            if (ModelState.IsValid)
            {
                db.Entry(<#= ModelVariable #>).State = EntityState.Modified;
<# if (UseAsync) { #>
                await db.SaveChangesAsync();
<# } else { #>
                db.SaveChanges();
<# } #>
                return RedirectToAction("Index");
            }
<# foreach (var property in relatedProperties.Values) { #>
            ViewBag.<#= property.ForeignKeyPropertyNames[0] #> = new SelectList(db.<#= property.EntitySetName #>, "<#= property.PrimaryKeyNames[0] #>", "<#= property.DisplayPropertyName #>", <#= ModelVariable #>.<#= property.ForeignKeyPropertyNames[0] #>);
<# } #>
            return View(<#= ModelVariable #>);
        }

        // GET: <#= routePrefix #>Delete/5
<# if (UseAsync) { #>
        public async Task<ActionResult> Delete(<#= primaryKeyNullableTypeName #> id)
<# } else { #>
        public ActionResult Delete(<#= primaryKeyNullableTypeName #> id)
<# } #>
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
<# if (UseAsync) { #>
            <#= ModelTypeName #> <#= ModelVariable #> = await db.<#= entitySetName #>.FindAsync(id);
<# } else { #>
            <#= ModelTypeName #> <#= ModelVariable #> = db.<#= entitySetName #>.Find(id);
<# } #>
            if (<#= ModelVariable #> == null)
            {
                return HttpNotFound();
            }
            return View(<#= ModelVariable #>);
        }

        // POST: <#= routePrefix #>Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
<# if (UseAsync) { #>
        public async Task<ActionResult> DeleteConfirmed(<#= primaryKeyShortTypeName #> id)
<# } else { #>
        public ActionResult DeleteConfirmed(<#= primaryKeyShortTypeName #> id)
<# } #>
        {
<# if (UseAsync) { #>
            <#= ModelTypeName #> <#= ModelVariable #> = await db.<#= entitySetName #>.FindAsync(id);
<# } else { #>
            <#= ModelTypeName #> <#= ModelVariable #> = db.<#= entitySetName #>.Find(id);
<# } #>
            db.<#= entitySetName #>.Remove(<#= ModelVariable #>);
<# if (UseAsync) { #>
            await db.SaveChangesAsync();
<# } else { #>
            db.SaveChanges();
<# } #>
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
<#+
// This function converts the primary key short type name to its nullable equivalent when possible. This is required to make
// sure that an HTTP 400 error is thrown when the user tries to access the edit, delete, or details action with null values.
    string GetNullableTypeName(string typeName, string shortTypeName)
    {
        // The exceptions are caught because if for any reason the type is user defined, then the short type name will be used.
        // In that case the user will receive a server error if null is passed to the edit, delete, or details actions.
        Type primaryKeyType = null;
        try
        {
            primaryKeyType = Type.GetType(typeName);
        }
        catch
        {
        }
        if (primaryKeyType != null && (primaryKeyType.IsPrimitive || IsGuid(typeName)))
        {
            return shortTypeName + "?";
        }
        return shortTypeName;
    }

    bool IsGuid(string typeName) {
        return String.Equals("System.Guid", typeName, StringComparison.OrdinalIgnoreCase);
    }
#>