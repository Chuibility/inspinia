
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/dashboard1');
    }
});

FlowRouter.route('/dashboard1', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard1"});
    }
});

FlowRouter.route('/dashboard2', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard2"});
    }
});

FlowRouter.route('/dashboard3', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard3"});
    }
});

FlowRouter.route('/dashboard4', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard4"});
    }
});

FlowRouter.route('/dashboard4l', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard4l"});
    }
});

FlowRouter.route('/dashboard5', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard5"});
    }
});

//
// Layouts route
//

FlowRouter.route('/layouts', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "layouts"});
    }
});


//
// Graphs routes
//

FlowRouter.route('/graphFlot', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphFlot"});
    }
});


FlowRouter.route('/graphRickshaw', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphRickshaw"});
    }
});


FlowRouter.route('/graphChartJs', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphChartJs"});
    }
});


FlowRouter.route('/graphChartist', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphChartist"});
    }
});


FlowRouter.route('/c3charts', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "c3charts"});
    }
});


FlowRouter.route('/graphPeity', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphPeity"});
    }
});


FlowRouter.route('/graphSparkline', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "graphSparkline"});
    }
});





//
// Mailbox
//


FlowRouter.route('/mailbox', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "mailbox"});
    }
});

FlowRouter.route('/emailView', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "emailView"});
    }
});

FlowRouter.route('/emailCompose', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "emailCompose"});
    }
});

FlowRouter.route('/emailTemplates', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "emailTemplates"});
    }
});

//
// Widgets
//


FlowRouter.route('/widgets', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "widgets"});
    }
});


//
// Metrics
//


FlowRouter.route('/metrics', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "metrics"});
    }
});


//
// Forms
//


FlowRouter.route('/formBasic', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formBasic"});
    }
});


FlowRouter.route('/formAdvanced', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formAdvanced"});
    }
});


FlowRouter.route('/formWizard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formWizard"});
    }
});


FlowRouter.route('/formUpload', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formUpload"});
    }
});


FlowRouter.route('/textEditor', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "textEditor"});
    }
});

FlowRouter.route('/autocomplete', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "autocomplete"});
    }
});


FlowRouter.route('/markdown', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "markdown"});
    }
});


//
// App Views
//


FlowRouter.route('/contacts', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contacts"});
    }
});

FlowRouter.route('/profile', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "profile"});
    }
});

FlowRouter.route('/profile2', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "profile2"});
    }
});

FlowRouter.route('/contacts2', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contacts2"});
    }
});

FlowRouter.route('/projects', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "projects"});
    }
});

FlowRouter.route('/projectDetail', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "projectDetail"});
    }
});

FlowRouter.route('/activityStream', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "activityStream"});
    }
});

FlowRouter.route('/teamsBoard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "teamsBoard"});
    }
});

FlowRouter.route('/socialFeed', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "socialFeed"});
    }
});

FlowRouter.route('/clients', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "clients"});
    }
});

FlowRouter.route('/fullHeight', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "fullHeight"});
    }
});

FlowRouter.route('/offCanvas', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "offCanvas"});
    }
});

FlowRouter.route('/voteList', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "voteList"});
    }
});

FlowRouter.route('/fileManager', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "fileManager"});
    }
});

FlowRouter.route('/calendar', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "calendar"});
    }
});

FlowRouter.route('/issueTracker', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "issueTracker"});
    }
});

FlowRouter.route('/blog', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "blog"});
    }
});

FlowRouter.route('/article', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "article"});
    }
});

FlowRouter.route('/faq', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "faq"});
    }
});

FlowRouter.route('/timelineOne', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "timelineOne"});
    }
});

FlowRouter.route('/pinBoard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pinBoard"});
    }
});
//
// Other pages
//

FlowRouter.route('/searchResult', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "searchResult"});
    }
});

FlowRouter.route('/lockScreen', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "lockScreen"});
    }
});

FlowRouter.route('/invoice', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "invoice"});
    }
});

FlowRouter.route('/invoicePrint', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "invoicePrint"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "login"});
    }
});

FlowRouter.route('/loginTwo', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "loginTwo"});
    }
});

FlowRouter.route('/forgotPassword', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "forgotPassword"});
    }
});

FlowRouter.route('/register', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "register"});
    }
});

FlowRouter.route('/errorOne', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "errorOne"});
    }
});

FlowRouter.route('/errorTwo', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "errorTwo"});
    }
});

FlowRouter.route('/emptyPage', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "emptyPage"});
    }
});
//
// Miscellaneous
//


FlowRouter.route('/toastrNotification', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "toastrNotification"});
    }
});

FlowRouter.route('/nestableList', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "nestableList"});
    }
});

FlowRouter.route('/agileBoard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "agileBoard"});
    }
});

FlowRouter.route('/timelineTwo', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "timelineTwo"});
    }
});

FlowRouter.route('/diff', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "diff"});
    }
});

FlowRouter.route('/pdfViewer', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pdfViewer"});
    }
});

FlowRouter.route('/i18support', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "i18support"});
    }
});

FlowRouter.route('/sweetAlert', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "sweetAlert"});
    }
});

FlowRouter.route('/idleTimer', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "idleTimer"});
    }
});

FlowRouter.route('/truncate', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "truncate"});
    }
});

FlowRouter.route('/passwordMeter', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "passwordMeter"});
    }
});

FlowRouter.route('/spinners', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "spinners"});
    }
});

FlowRouter.route('/spinnersUsage', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "spinnersUsage"});
    }
});

FlowRouter.route('/liveFavicon', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "liveFavicon"});
    }
});

FlowRouter.route('/googleMaps', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "googleMaps"});
    }
});

FlowRouter.route('/datamaps', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "datamaps"});
    }
});

FlowRouter.route('/socialButtons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "socialButtons"});
    }
});

FlowRouter.route('/codeEditor', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "codeEditor"});
    }
});

FlowRouter.route('/modalWindow', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "modalWindow"});
    }
});

FlowRouter.route('/clipboard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "clipboard"});
    }
});

FlowRouter.route('/textSpinners', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "textSpinners"});
    }
});

FlowRouter.route('/forumView', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "forumView"});
    }
});

FlowRouter.route('/forumDetail', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "forumDetail"});
    }
});

FlowRouter.route('/validation', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "validation"});
    }
});

FlowRouter.route('/treeView', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "treeView"});
    }
});
FlowRouter.route('/loadingButtons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "loadingButtons"});
    }
});

FlowRouter.route('/chatView', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "chatView"});
    }
});

FlowRouter.route('/masonry', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "masonry"});
    }
});

FlowRouter.route('/tour', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "tour"});
    }
});
//
// UI Elements
//


FlowRouter.route('/typography', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "typography"});
    }
});

FlowRouter.route('/icons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "icons"});
    }
});

FlowRouter.route('/draggablePanels', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "draggablePanels"});
    }
});

FlowRouter.route('/resizeablePanels', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "resizeablePanels"});
    }
});

FlowRouter.route('/buttons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "buttons"});
    }
});
FlowRouter.route('/video', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "video"});
    }
});

FlowRouter.route('/tabsPanels', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "tabsPanels"});
    }
});

FlowRouter.route('/tabs', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "tabs"});
    }
});

FlowRouter.route('/notifications', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "notifications"});
    }
});

FlowRouter.route('/helperClasses', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "helperClasses"});
    }
});

FlowRouter.route('/badgesLabels', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "badgesLabels"});
    }
});
//
// Grid Options
//


FlowRouter.route('/gridOptions', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "gridOptions"});
    }
});
//
// Tables
//

FlowRouter.route('/tableStatic', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "tableStatic"});
    }
});


FlowRouter.route('/dataTables', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dataTables"});
    }
});

FlowRouter.route('/fooTables', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "fooTables"});
    }
});
//
// E-commerce
//


FlowRouter.route('/productsGrid', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "productsGrid"});
    }
});

FlowRouter.route('/productsList', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "productsList"});
    }
});

FlowRouter.route('/productEdit', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "productEdit"});
    }
});

FlowRouter.route('/shopingCart', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "shopingCart"});
    }
});

FlowRouter.route('/orders', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "orders"});
    }
});

FlowRouter.route('/productDetail', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "productDetail"});
    }
});

FlowRouter.route('/payments', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "payments"});
    }
});

//
// Gallery
//

FlowRouter.route('/gallery', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "gallery"});
    }
});

FlowRouter.route('/carusela', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "carusela"});
    }
});

FlowRouter.route('/slick', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "slick"});
    }
});

//
// CSS Animations
//

FlowRouter.route('/cssAnimations', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "cssAnimations"});
    }
});

//
// Landing page
//


FlowRouter.route('/landing', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "landing"});
    }
});

//
// Other pages routes
//

FlowRouter.route('/notFound', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "notFound"});
    }
});

