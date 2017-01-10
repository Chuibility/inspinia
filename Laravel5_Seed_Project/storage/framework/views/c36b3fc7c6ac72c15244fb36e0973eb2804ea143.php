<?php $__env->startSection('title', 'Minor page'); ?>

<?php $__env->startSection('content'); ?>
  <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center m-t-lg">
                    <h1>
                        Simple example of second view
                    </h1>
                    <small>Writen in minor.blade.php file.</small>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>