<template>
  
    <div>
        <div class="page-wrapper">
      <!-- Page Header Start-->
      <div class="page-main-header">
        <div class="main-header-right row">
          <div class="main-header-left d-lg-none">
            <div class="logo-wrapper"><a href="index.html"><img src="../assets/images/endless-logo.png" alt=""></a></div>
          </div>
          <div class="mobile-sidebar d-block">
            <div class="media-body text-right switch-sm">
              <label class="switch"><a href="#"><i id="sidebar-toggle" data-feather="align-left"></i></a></label>
            </div>
          </div>
          <div class="nav-right col p-0">
            <ul class="nav-menus">
              <li>
                <form class="form-inline search-form" action="#" method="get">
                  <div class="form-group">
                    <div class="Typeahead Typeahead--twitterUsers">
                      <div class="u-posRelative">
                        <input class="Typeahead-input form-control-plaintext" id="demo-input" type="text" name="q" placeholder="جستجو...">
                        <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">در حال بارگذاری...</span></div><span class="d-sm-none mobile-search"><i data-feather="search"></i></span>
                      </div>
                      <div class="Typeahead-menu"></div>
                    </div>
                  </div>
                </form>
              </li>
              <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize"></i></a></li>
              <li class="onhover-dropdown"><a class="txt-dark" href="#">
                  <h6>EN</h6></a>
                <ul class="language-dropdown onhover-show-div p-20">
                  <li><a href="#" data-lng="en"><i class="flag-icon flag-icon-is"></i> انگلیسی</a></li>
                  <li><a href="#" data-lng="es"><i class="flag-icon flag-icon-um"></i> اسپانیا</a></li>
                  <li><a href="#" data-lng="pt"><i class="flag-icon flag-icon-uy"></i> پرتغال</a></li>
                  <li><a href="#" data-lng="fr"><i class="flag-icon flag-icon-nz"></i> فرانسه</a></li>
                </ul>
              </li>
              <li class="onhover-dropdown"><i data-feather="bell"></i><span class="dot"></span>
                <ul class="notification-dropdown onhover-show-div">
                  <li>اطلاعیه <span class="badge badge-pill badge-primary pull-right">3</span></li>
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6 class="mt-0"><span><i class="shopping-color" data-feather="shopping-bag"></i></span>سفارش شما برای ارسال آماده است..!<small class="pull-right">9:30 صبح</small></h6>
                        <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم .</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6 class="mt-0 txt-success"><span><i class="download-color font-success" data-feather="download"></i></span>دانلود کامل<small class="pull-right">2:30 غروب</small></h6>
                        <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم .</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6 class="mt-0 txt-danger"><span><i class="alert-color font-danger" data-feather="alert-circle"></i></span>250 مگابایت فایل های حذف شده<small class="pull-right">5:00 غروب</small></h6>
                        <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم .</p>
                      </div>
                    </div>
                  </li>
                  <li class="bg-light txt-dark"><a href="#">همه</a> اطلاعیه ها</li>
                </ul>
              </li>
              <li><a href="#"><i class="right_side_toggle" data-feather="message-circle"></i><span class="dot"></span></a></li>
              <li class="onhover-dropdown">
                <div class="media align-items-center"><img class="align-self-center pull-right img-50 rounded-circle" src="../assets/images/dashboard/user.png" alt="header-user">
                  <div class="dotted-animation"><span class="animate-circle"></span><span class="main-circle"></span></div>
                </div>
                <ul class="profile-dropdown onhover-show-div p-20">
                  <li><a href="#"><i data-feather="user"></i>ویرایش پروفایل</a></li>
                  <li><a href="#"><i data-feather="mail"></i>                                    صندوق ورودی</a></li>
                  <li><a href="#"><i data-feather="lock"></i>                                    قفل صفحه</a></li>
                  <li><a href="#"><i data-feather="settings"></i>                                    تنظیمات</a></li>
                  <li><a href="#"><i data-feather="log-out"></i>                                    خروج</a></li>
                </ul>
              </li>
            </ul>
            <div class="d-lg-none mobile-toggle pull-right"><i data-feather="more-horizontal"></i></div>
          </div>
          <!-- <script id="result-template" type="text/x-handlebars-template">
            <div class="ProfileCard u-cf">                        
            <div class="ProfileCard-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></div>
            <div class="ProfileCard-details">
            <div class="ProfileCard-realName">{{name}}</div>
            </div>
            </div>
          </script>
          <script id="empty-template" type="text/x-handlebars-template">
            <div class="EmptyMessage">جستجوی شما 0 نتیجه را به دست آورد. این احتمالا به این معنی است که باطن پایین است، وای!</div>
            
          </script> -->
        </div>
      </div>
      <!-- Page Header Ends                              -->
      <!-- Page Body Start-->
      <div class="page-body-wrapper">
        <!-- Page Sidebar Start-->
        <div class="page-sidebar">
          <div class="main-header-left d-none d-lg-block">
            <div class="logo-wrapper"><a href="index.html"><img src="../assets/images/endless-logo.png" alt=""></a></div>
          </div>
          <div class="sidebar custom-scrollbar">
            <div class="sidebar-user text-center">
              <div><img class="img-60 rounded-circle" src="../assets/images/user/1.jpg" alt="#">
                <div class="profile-edit"><a href="edit-profile.html" target="_blank"><i data-feather="edit"></i></a></div>
              </div>
              <h6 class="mt-3 f-14">پارادایم</h6>
              <p>مدیر کل.</p>
            </div>
            <ul class="sidebar-menu">
              <li><a class="sidebar-header" href="#"><i data-feather="home"></i><span>داشبورد</span><span class="badge badge-pill badge-primary">6</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="index.html"><i class="fa fa-circle"></i><span>پیش فرض</span></a></li>
                  <li><a href="dashboard-ecommerce.html"><i class="fa fa-circle"></i><span>فروشگاه</span></a></li>
                  <li><a href="dashboard-university.html"><i class="fa fa-circle"></i><span>دانشگاه</span></a></li>
                  <li><a href="dashboard-bitcoin.html"><i class="fa fa-circle"></i><span>کریپتو</span></a></li>
                  <li><a href="dashboard-server.html"><i class="fa fa-circle"></i><span>سرور</span></a></li>
                  <li><a href="dashboard-project.html"><i class="fa fa-circle"></i><span>پروژه</span></a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="airplay"></i><span>ابزارک ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="general-widget.html"><i class="fa fa-circle"></i>عمومی</a></li>
                  <li><a href="chart-widget.html"><i class="fa fa-circle"></i>نمودار</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="anchor"></i><span> استارتر کیت</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="disc"></i><span>نسخه رنگی</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="layout-light.html"><i class="fa fa-circle"></i>طرح روشن</a></li>
                  <li><a href="layout-dark.html"><i class="fa fa-circle"></i>طرح تاریک</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="sidebar"></i><span>نوارکناری</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="compact.html"><i class="fa fa-circle"></i>نوارکناری جمع و جور</a></li>
                  <li><a href="compact-small.html"><i class="fa fa-circle"></i>نوارکناری آیکون جمع و جور</a></li>
                  <li><a href="sidebar-hidden.html"><i class="fa fa-circle"></i>نوارکناری مخفی</a></li>
                  <li><a href="sidebar-fixed.html"><i class="fa fa-circle"></i>نوارکناری ثابت</a></li>
                  <li><a class="disabled" href="#" onclick="return false;"><i class="fa fa-circle"></i>غیرفعال</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="layout"></i><span>طرح صفحه</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="box-layout.html"><i class="fa fa-circle"></i>باکس</a></li>
                  <li><a href="layout-rtl.html"><i class="fa fa-circle"></i>راست چین</a></li>
                  <li><a href="1-column.html"><i class="fa fa-circle"></i>1 ستونه</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="align-justify"></i><span>گزینه های منو</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="hide-on-scroll.html"><i class="fa fa-circle"></i>مخفی شدن منو با اسکرول</a></li>
                  <li><a href="vertical.html"><i class="fa fa-circle"></i>منوی عمودی</a></li>
                  <li><a href="mega-menu.html"><i class="fa fa-circle"></i>منوی مگا</a></li>
                  <li><a href="fix-header.html"><i class="fa fa-circle"></i>سربرگ ثابت</a></li>
                  <li><a href="fix-header-sidebar.html"><i class="fa fa-circle"></i>نوارکناری و سربرگ ثابت</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="cloud-lightning"></i><span>پاورقی ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="footer-light.html"><i class="fa fa-circle"></i>پاورقی روشن</a></li>
                  <li><a href="footer-dark.html"><i class="fa fa-circle"></i>پاورقی تاریک</a></li>
                  <li><a href="footer-fixed.html"><i class="fa fa-circle"></i>پاورقی ثابت</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="pagebuild.html"><i data-feather="clipboard"></i><span>صفحه ساز</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="edit-3"></i><span>فرم ساز</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="form-builder-1.html"><i class="fa fa-circle"></i>فرم ساز 1</a></li>
                  <li><a href="form-builder-2.html"><i class="fa fa-circle"></i>فرم ساز 2</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="button-builder.html"><i data-feather="bookmark"></i><span>دکمه ساز</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="box"></i><span> پایه</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="state-color.html"><i class="fa fa-circle"></i>رنگ ناحیه</a></li>
                  <li><a href="typography.html"><i class="fa fa-circle"></i>تایپوگرافی</a></li>
                  <li><a href="avatars.html"><i class="fa fa-circle"></i>آواتار</a></li>
                  <li><a href="helper-classes.html"><i class="fa fa-circle"></i>کلاس های کمکی</a></li>
                  <li><a href="grid.html"><i class="fa fa-circle"></i>شبکه ای</a></li>
                  <li><a href="tag-pills.html"><i class="fa fa-circle"></i>برچسب</a></li>
                  <li><a href="progress-bar.html"><i class="fa fa-circle"></i>پیشرفت</a></li>
                  <li><a href="modal.html"><i class="fa fa-circle"></i>مودال</a></li>
                  <li><a href="alert.html"><i class="fa fa-circle"></i>هشدار</a></li>
                  <li><a href="popover.html"><i class="fa fa-circle"></i>پیش نمایش</a></li>
                  <li><a href="tooltip.html"><i class="fa fa-circle"></i>راهنمای ابزار</a></li>
                  <li><a href="loader.html"><i class="fa fa-circle"></i>اسپینر</a></li>
                  <li><a href="dropdown.html"><i class="fa fa-circle"></i>کرکره ای</a></li>
                  <li><a href="#"><i class="fa fa-circle"></i>زبانه ها<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="tab-bootstrap.html"><i class="fa fa-circle"></i>زبانه های بوت استرپ</a></li>
                      <li><a href="tab-material.html"><i class="fa fa-circle"></i>زبانه های خطی</a></li>
                    </ul>
                  </li>
                  <li><a href="according.html"><i class="fa fa-circle"></i>آکاردئون</a></li>
                  <li><a href="navs.html"><i class="fa fa-circle"></i>ناوبری</a></li>
                  <li><a href="box-shadow.html"><i class="fa fa-circle"></i>سایه</a></li>
                  <li><a href="list.html"><i class="fa fa-circle"></i>فهرست ها</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="folder-plus"></i><span> پیشرفته</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="scrollable.html"><i class="fa fa-circle"></i>قابل اسکرول</a></li>
                  <li><a href="tree.html"><i class="fa fa-circle"></i>نمای درختی</a></li>
                  <li><a href="bootstrap-notify.html"><i class="fa fa-circle"></i>اطلاع رسانی بوت استرپ</a></li>
                  <li><a href="rating.html"><i class="fa fa-circle"></i>امتیاز دهی</a></li>
                  <li><a href="dropzone.html"><i class="fa fa-circle"></i>ناحیه انداختن</a></li>
                  <li><a href="tour.html"><i class="fa fa-circle"></i>تور</a></li>
                  <li><a href="sweet-alert2.html"><i class="fa fa-circle"></i>هشدار شیرین2</a></li>
                  <li><a href="modal-animated.html"><i class="fa fa-circle"></i>مودال متحرک</a></li>
                  <li><a href="owl-carousel.html"><i class="fa fa-circle"></i>اول کروسلl</a></li>
                  <li><a href="ribbons.html"><i class="fa fa-circle"></i>روبان</a></li>
                  <li><a href="pagination.html"><i class="fa fa-circle"></i>صفحه بندی</a></li>
                  <li><a href="steps.html"><i class="fa fa-circle"></i>مراحل</a></li>
                  <li><a href="breadcrumb.html"><i class="fa fa-circle"></i>بردکرامب</a></li>
                  <li><a href="range-slider.html"><i class="fa fa-circle"></i>اسلایدر محدوده</a></li>
                  <li><a href="image-cropper.html"><i class="fa fa-circle"></i>برش تصویر</a></li>
                  <li><a href="sticky.html"><i class="fa fa-circle"></i>چسبنده</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="cloud-drizzle"></i><span>انیمیشن<span class="badge badge-danger ml-3">داغ</span></span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="animate.html"><i class="fa fa-circle"></i>متحرک</a></li>
                  <li><a href="scroll-reval.html"><i class="fa fa-circle"></i>ظاهر شدن با اسکرول</a></li>
                  <li><a href="AOS.html"><i class="fa fa-circle"></i>انیمیشن AOS</a></li>
                  <li><a href="tilt.html"><i class="fa fa-circle"></i>انیمیشن شیب دار</a></li>
                  <li><a href="wow.html"><i class="fa fa-circle"></i>انیمیشن واو</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="command"></i><span>آیکون ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="flag-icon.html"><i class="fa fa-circle"></i>آیکون پرچم</a></li>
                  <li><a href="font-awesome.html"><i class="fa fa-circle"></i>آیکون فونت فوق العاده</a></li>
                  <li><a href="ico-icon.html"><i class="fa fa-circle"></i>آیکون آیکو</a></li>
                  <li><a href="themify-icon.html"><i class="fa fa-circle"></i>آیکون تیمیفای</a></li>
                  <li><a href="feather-icon.html"><i class="fa fa-circle"></i>آیکون فدر</a></li>
                  <li><a href="whether-icon.html"><i class="fa fa-circle"></i>آیکون آب و هوا</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="cloud"></i><span>دکمه ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="buttons.html"><i class="fa fa-circle"></i>استایل پیش فرض</a></li>
                  <li><a href="buttons-flat.html"><i class="fa fa-circle"></i>استایل فلت</a></li>
                  <li><a href="buttons-edge.html"><i class="fa fa-circle"></i>استایل لبه دار</a></li>
                  <li><a href="raised-button.html"><i class="fa fa-circle"></i>استایل افزایشی</a></li>
                  <li><a href="button-group.html"><i class="fa fa-circle"></i>گروه دکمه</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="file-text"></i><span>فرم ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="#"><i class="fa fa-circle"></i>کنترل های فرم<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="form-validation.html"><i class="fa fa-circle"></i>فرم اعتبار سنجی</a></li>
                      <li><a href="base-input.html"><i class="fa fa-circle"></i>ورودی های پایه</a></li>
                      <li><a href="radio-checkbox-control.html"><i class="fa fa-circle"></i>چک باکس و رادیو</a></li>
                      <li><a href="input-group.html"><i class="fa fa-circle"></i>گروه های ورودی</a></li>
                      <li><a href="megaoptions.html"><i class="fa fa-circle"></i>گزینه های مگا</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-circle"></i>ابزارک های فرم<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="datepicker.html"><i class="fa fa-circle"></i>انتخاب تاریخ</a></li>
                      <li><a href="time-picker.html"><i class="fa fa-circle"></i>انتخاب زمان</a></li>
                      <li><a href="datetimepicker.html"><i class="fa fa-circle"></i>انتخاب زمان تاریخ</a></li>
                      <li><a href="daterangepicker.html"><i class="fa fa-circle"></i>انتخاب محدوده زمانی</a></li>
                      <li><a href="touchspin.html"><i class="fa fa-circle"></i>تاچ اسپین</a></li>
                      <li><a href="select2.html"><i class="fa fa-circle"></i>انتخاب2</a></li>
                      <li><a href="switch.html"><i class="fa fa-circle"></i>تعویض</a></li>
                      <li><a href="typeahead.html"><i class="fa fa-circle"></i>تایپ هد</a></li>
                      <li><a href="clipboard.html"><i class="fa fa-circle"></i>کلیپ بورد</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-circle"></i>طرح فرم<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="default-form.html"><i class="fa fa-circle"></i>فرم های پیش فرض</a></li>
                      <li><a href="form-wizard.html"><i class="fa fa-circle"></i>فرم جادویی 1</a></li>
                      <li><a href="form-wizard-two.html"><i class="fa fa-circle"></i>فرم جادویی 2</a></li>
                      <li><a href="form-wizard-three.html"><i class="fa fa-circle"></i>فرم جادویی 3</a></li>
                      <li><a href="form-wizard-four.html"><i class="fa fa-circle"></i>فرم جادویی 4</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="server"></i><span>جداول</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="#"><i class="fa fa-circle"></i>جداول بوت استرپ<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="bootstrap-basic-table.html"><i class="fa fa-circle"></i>جداول پایه</a></li>
                      <li><a href="bootstrap-sizing-table.html"><i class="fa fa-circle"></i>جداول اندازه گیری</a></li>
                      <li><a href="bootstrap-border-table.html"><i class="fa fa-circle"></i>جداول مرزی</a></li>
                      <li><a href="bootstrap-styling-table.html"><i class="fa fa-circle"></i>جداول استایل</a></li>
                      <li><a href="table-components.html"><i class="fa fa-circle"></i>کامپونت های جدول</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-circle"></i>جداول داده<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="datatable-basic-init.html"><i class="fa fa-circle"></i>واحد پایه</a></li>
                      <li><a href="datatable-advance.html"><i class="fa fa-circle"></i>واحد پیشرفته</a></li>
                      <li><a href="datatable-styling.html"><i class="fa fa-circle"></i>استایلینگ</a></li>
                      <li><a href="datatable-AJAX.html"><i class="fa fa-circle"></i>آجاکس</a></li>
                      <li><a href="datatable-server-side.html"><i class="fa fa-circle"></i>سمت سرور</a></li>
                      <li><a href="datatable-plugin.html"><i class="fa fa-circle"></i>پلاگین</a></li>
                      <li><a href="datatable-API.html"><i class="fa fa-circle"></i>آی پی آی</a></li>
                      <li><a href="datatable-data-source.html"><i class="fa fa-circle"></i>منابع داده</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-circle"></i>اکستنشن جداول داده<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="datatable-ext-autofill.html"><i class="fa fa-circle"></i>تکمیل خودکار</a></li>
                      <li><a href="datatable-ext-basic-button.html"><i class="fa fa-circle"></i>دکمه پایه</a></li>
                      <li><a href="datatable-ext-col-reorder.html"><i class="fa fa-circle"></i>تنظیم مجدد ستون</a></li>
                      <li><a href="datatable-ext-fixed-header.html"><i class="fa fa-circle"></i>سربرگ ثابت</a></li>
                      <li><a href="datatable-ext-html-5-data-export.html"><i class="fa fa-circle"></i>خروجی اچ تی ام ال 5</a></li>
                      <li><a href="datatable-ext-key-table.html"><i class="fa fa-circle"></i>جدول کلیدی</a></li>
                      <li><a href="datatable-ext-responsive.html"><i class="fa fa-circle"></i>واکنشگرا</a></li>
                      <li><a href="datatable-ext-row-reorder.html"><i class="fa fa-circle"></i>تنظیم مجدد ردیف</a></li>
                      <li><a href="datatable-ext-scroller.html"><i class="fa fa-circle"></i>اسکرولر</a></li>
                    </ul>
                  </li>
                  <li><a href="jsgrid-table.html"><i class="fa fa-circle"></i>جدول شبکه ای جی اس</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="book"></i><span>کارت ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="basic-card.html"><i class="fa fa-circle"></i>کارت پایه</a></li>
                  <li><a href="creative-card.html"><i class="fa fa-circle"></i>کارت خلاقانه</a></li>
                  <li><a href="tabbed-card.html"><i class="fa fa-circle"></i>کارت برگه بندی</a></li>
                  <li><a href="dragable-card.html"><i class="fa fa-circle"></i>کارت قابل جابجایی</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="sliders"></i><span>خط زمانی</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="timeline-v-1.html"><i class="fa fa-circle"></i>خط زمانی 1</a></li>
                  <li><a href="timeline-v-2.html"><i class="fa fa-circle"></i>خط زمانی 2</a></li>
                  <li><a href="timeline-small.html"><i class="fa fa-circle"></i>خط زمانی 3</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="bar-chart"></i><span>نمودارها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="chart-google.html"><i class="fa fa-circle"></i>نمودار گوگل</a></li>
                  <li><a href="chart-sparkline.html"><i class="fa fa-circle"></i>نمودار اسپارک لاین</a></li>
                  <li><a href="chart-flot.html"><i class="fa fa-circle"></i>نمودار فلوت</a></li>
                  <li><a href="chart-radial.html"><i class="fa fa-circle"></i>نمودار شعاعی</a></li>
                  <li><a href="chart-knob.html"><i class="fa fa-circle"></i>نمودار نوب</a></li>
                  <li><a href="chart-morris.html"><i class="fa fa-circle"></i>نمودار موریس</a></li>
                  <li><a href="chartjs.html"><i class="fa fa-circle"></i>نمودار چارت جی اس</a></li>
                  <li><a href="chartist.html"><i class="fa fa-circle"></i>نمودار چارتیست</a></li>
                  <li><a href="chart-peity.html"><i class="fa fa-circle"></i>نمودار پیتی</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="map"></i><span>نقشه ها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="map-js.html"><i class="fa fa-circle"></i>نقشه جی اس</a></li>
                  <li><a href="vector-map.html"><i class="fa fa-circle"></i>نقشه وکتور</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="printer"></i><span>قالب های ایمیل</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="#"><i class="fa fa-circle"></i>پایه<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="basic-template.html" target="_blank"><i class="fa fa-circle"></i>ایمیل پایه</a></li>
                      <li><a href="email-header.html" target="_blank"><i class="fa fa-circle"></i>پایه با سربرگ</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="sidebar-submenu">
                  <li><a href="#"><i class="fa fa-circle"></i>فروشگاهی<i class="fa fa-angle-down pull-right"></i></a>
                    <ul class="sidebar-submenu">
                      <li><a href="template-email.html" target="_blank"><i class="fa fa-circle"></i>قالب ایمیل</a></li>
                      <li><a href="template-email-2.html" target="_blank"><i class="fa fa-circle"></i>قالب ایمیل 2</a></li>
                      <li><a href="ecommerce-templates.html" target="_blank"><i class="fa fa-circle"></i>ایمیل فروشگاهی</a></li>
                      <li><a href="email-order-success.html" target="_blank"><i class="fa fa-circle"></i>سفارش موفقیت </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="git-pull-request"></i><span>ویرایشگرها</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="summernote.html"><i class="fa fa-circle"></i>سامر نوت</a></li>
                  <li><a href="ckeditor.html"><i class="fa fa-circle"></i>ویرایشگر سی کی</a></li>
                  <li><a href="simple-MDE.html"><i class="fa fa-circle"></i>ویرایشگر MDE</a></li>
                  <li><a href="ace-code-editor.html"><i class="fa fa-circle"></i>ویرایشگر کد ACE</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="users"></i><span>کاربران</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="user-profile.html"><i class="fa fa-circle"></i>پروفایل کاربران</a></li>
                  <li><a href="edit-profile.html"><i class="fa fa-circle"></i>ویرایش کاربران</a></li>
                  <li><a href="user-cards.html"><i class="fa fa-circle"></i>کارت های کاربران</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="calendar"></i><span>تقویم</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="calendar.html"><i class="fa fa-circle"></i>تقویم کامل پایه</a></li>
                  <li><a href="calendar-event.html"><i class="fa fa-circle"></i>تقویم کامل رویدادها</a></li>
                  <li><a href="calendar-advanced.html"><i class="fa fa-circle"></i>تقویم کامل پیشرفته</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="internationalization.html"><i data-feather="aperture"></i><span>بین المللی شدن</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="image"></i><span>گالری</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="gallery.html"><i class="fa fa-circle"></i>گالری شبکه ای</a></li>
                  <li><a href="gallery-with-description.html"><i class="fa fa-circle"></i>گالری شبکه ای با توضیحات</a></li>
                  <li><a href="gallery-masonry.html"><i class="fa fa-circle"></i>گالری مسونری</a></li>
                  <li><a href="masonry-gallery-with-disc.html"><i class="fa fa-circle"></i>گالری مسونری با توضیحات</a></li>
                  <li><a href="gallery-hover.html"><i class="fa fa-circle"></i>اثرات شناور</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="mail"></i><span>ایمیل</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="email-application.html"><i class="fa fa-circle"></i>برنامه ایمیل</a></li>
                  <li><a href="email-compose.html"><i class="fa fa-circle"></i>نوشتن ایمیل</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="edit"></i><span> وبلاگ</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="blog.html"><i class="fa fa-circle"></i>جزئیات وبلاگ</a></li>
                  <li><a href="blog-single.html"><i class="fa fa-circle"></i>وبلاگ تکی</a></li>
                  <li><a href="add-post.html"><i class="fa fa-circle"></i>افزودن پست</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="message-square"></i><span>چت</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="chat.html"><i class="fa fa-circle"></i>برنامه چت</a></li>
                  <li><a href="chat-video.html"><i class="fa fa-circle"></i>ویدئو چت</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="social-app.html"><i data-feather="chrome"></i><span>برنامه اجتماعی</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="user-check"></i><span>جستجوی شغل</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="job-cards-view.html"><i class="fa fa-circle"></i>مشاهده کارت</a></li>
                  <li><a href="job-list-view.html"><i class="fa fa-circle"></i>نمایش لیست</a></li>
                  <li><a href="job-details.html"><i class="fa fa-circle"></i>جزئیات شغل</a></li>
                  <li><a href="job-apply.html"><i class="fa fa-circle"></i>درخواست دادن</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="layers"></i><span>یادگیری</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="learning-list-view.html"><i class="fa fa-circle"></i>لیست یادگیری</a></li>
                  <li><a href="learning-detailed.html"><i class="fa fa-circle"></i>دوره های دقیق </a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="faq.html"><i data-feather="help-circle"></i><span>پرسش و پاسخ</span></a></li>
              <li><a class="sidebar-header" href="knowledgebase.html"><i data-feather="database"></i><span>دانش محور</span></a></li>
              <li><a class="sidebar-header" href="support-ticket.html"><i data-feather="headphones"></i><span>تیکت پشتیبانی</span></a></li>
              <li><a class="sidebar-header" href="to-do.html"><i data-feather="mic"></i><span>انجام کار</span></a></li>
              <li><a class="sidebar-header" href="landing-page.html" target="_blank"><i data-feather="navigation-2"></i><span>صفحه لندینگ</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="shopping-bag"></i><span>فروشگاه</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="product.html"><i class="fa fa-circle"></i>محصول</a></li>
                  <li><a href="product-page.html"><i class="fa fa-circle"></i>صفحه محصول</a></li>
                  <li><a href="list-products.html"><i class="fa fa-circle"></i>لیست محصول</a></li>
                  <li><a href="payment-details.html"><i class="fa fa-circle"></i>جزئیات پرداخت</a></li>
                  <li><a href="order-history.html"><i class="fa fa-circle"></i>تاریخچه سفارش ها</a></li>
                  <li><a href="invoice-template.html"><i class="fa fa-circle"></i>صورتحساب</a></li>
                  <li><a href="cart.html"><i class="fa fa-circle"></i>سبد خرید</a></li>
                  <li><a href="list-wish.html"><i class="fa fa-circle"></i>لیست علاقه مندی ها</a></li>
                  <li><a href="checkout.html"><i class="fa fa-circle"></i>پرداخت</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="pricing.html"><i data-feather="dollar-sign"></i><span> قیمت گذاری</span></a></li>
              <li><a class="sidebar-header" href="sample-page.html"><i data-feather="file"></i><span> صفحه نمونه</span></a></li>
              <li><a class="sidebar-header" href="#"><i data-feather="search"></i><span>صفحات جستجو</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="search.html"><i class="fa fa-circle"></i>جستجوی وبسایت</a></li>
                  <li><a href="search-images.html"><i class="fa fa-circle"></i>جستجوی تصاویر</a></li>
                  <li><a href="search-video.html"><i class="fa fa-circle"></i>جستجوی ویدئو</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="alert-octagon"></i><span> صفحه ارور</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="error-400.html" target="_blank"><i class="fa fa-circle"></i>ارور 400</a></li>
                  <li><a href="error-401.html" target="_blank"><i class="fa fa-circle"></i>ارور 401</a></li>
                  <li><a href="error-403.html" target="_blank"><i class="fa fa-circle"></i>ارور 403</a></li>
                  <li><a href="error-404.html" target="_blank"><i class="fa fa-circle"></i>ارور 404</a></li>
                  <li><a href="error-500.html" target="_blank"><i class="fa fa-circle"></i>ارور 500</a></li>
                  <li><a href="error-503.html" target="_blank"><i class="fa fa-circle"></i>ارور 503</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="unlock"></i><span> احراز هویت</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="login.html" target="_blank"><i class="fa fa-circle"></i>ورود ساده</a></li>
                  <li><a href="login-image.html" target="_blank"><i class="fa fa-circle"></i>ورود با پس زمینه تصویر</a></li>
                  <li><a href="login-video.html" target="_blank"><i class="fa fa-circle"></i>ورود با پس زمینه ویدئو</a></li>
                  <li><a href="signup.html" target="_blank"><i class="fa fa-circle"></i>ثبت نام ساده</a></li>
                  <li><a href="signup-image.html" target="_blank"><i class="fa fa-circle"></i>ثبت نام با پس زمینه تصویر</a></li>
                  <li><a href="signup-video.html" target="_blank"><i class="fa fa-circle"></i>ثبت نام با پس زمینه ویدئو</a></li>
                  <li><a href="unlock.html" target="_blank"><i class="fa fa-circle"></i>باز کردن کاربر</a></li>
                  <li><a href="forget-password.html" target="_blank"><i class="fa fa-circle"></i>فراموشی رمزعبور</a></li>
                  <li><a href="reset-password.html" target="_blank"><i class="fa fa-circle"></i>بازیابی رمزعبور</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="#"><i data-feather="briefcase"></i><span>به زودی</span><i class="fa fa-angle-right pull-right"></i></a>
                <ul class="sidebar-submenu">
                  <li><a href="comingsoon.html" target="_blank"><i class="fa fa-circle"></i>به زودی ساده</a></li>
                  <li><a href="comingsoon-bg-video.html" target="_blank"><i class="fa fa-circle"></i>به زودی با پس زمینه ویدئو</a></li>
                  <li><a href="comingsoon-bg-img.html" target="_blank"><i class="fa fa-circle"></i>به زودی با پس زمینه تصویر</a></li>
                </ul>
              </li>
              <li><a class="sidebar-header" href="maintenance.html" target="_blank"><i data-feather="settings"></i><span> نگهداری</span></a></li>
            </ul>
          </div>
        </div>
        <!-- Page Sidebar Ends-->
        <!-- Right sidebar Start-->
        <div class="right-sidebar" id="right_side_bar">
          <div class="container p-0">
            <div class="modal-header p-l-20 p-r-20">
              <div class="col-sm-8 p-0">
                <h6 class="modal-title font-weight-bold">لیست دوستان</h6>
              </div>
              <div class="col-sm-4 text-right p-0"><i class="mr-2" data-feather="settings"></i></div>
            </div>
          </div>
          <div class="friend-list-search mt-0">
            <input type="text" placeholder="جستجوی دوست"><i class="fa fa-search"></i>
          </div>
          <div class="chat-box">
            <div class="people-list friend-list">
              <ul class="list">
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/1.jpg" alt="">
                  <div class="status-circle online"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> آنلاین</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/2.png" alt="">
                  <div class="status-circle away"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> 28 دقیقه پیش</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/8.jpg" alt="">
                  <div class="status-circle online"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> آنلاین</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/4.jpg" alt="">
                  <div class="status-circle online"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> آنلاین</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/5.jpg" alt="">
                  <div class="status-circle offline"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> 2 دقیقه پیش</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/6.jpg" alt="">
                  <div class="status-circle away"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> 2 ساعت پیش</div>
                  </div>
                </li>
                <li class="clearfix"><img class="rounded-circle user-image" src="../assets/images/user/7.jpg" alt="">
                  <div class="status-circle online"></div>
                  <div class="about">
                    <div class="name">اسم فرضی</div>
                    <div class="status"> آنلاین</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Right sidebar Ends-->
        <div class="page-body">
          <div class="container-fluid">
            <div class="page-header">
              <div class="row">
                <div class="col">
                  <div class="page-header-left">
                    <h3>پیش فرض</h3>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="index.html"><i data-feather="home"></i></a></li>
                      <li class="breadcrumb-item">داشبورد</li>
                      <li class="breadcrumb-item active">پیش فرض</li>
                    </ol>
                  </div>
                </div>
                <!-- Bookmark Start-->
                <div class="col">
                  <div class="bookmark pull-right">
                    <ul>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="تقویم"><i data-feather="calendar"></i></a></li>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="ایمیل"><i data-feather="mail"></i></a></li>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="چت"><i data-feather="message-square"></i></a></li>
                      <li><a href="#"><i class="bookmark-search" data-feather="star"></i></a>
                        <form class="form-inline search-form">
                          <div class="form-group form-control-search">
                            <input type="text" placeholder="جستجو..">
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Bookmark Ends-->
              </div>
            </div>
          </div>
          <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-8 xl-100">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="chart-widget-dashboard">
                          <div class="media">
                            <div class="media-body">
                              <h5 class="mt-0 mb-0 f-w-600"><i data-feather="dollar-sign"></i><span class="counter">5789</span></h5>
                              <p>مجموع بازدید ها</p>
                            </div><i data-feather="tag"></i>
                          </div>
                          <div class="dashboard-chart-container">
                            <div class="small-chart-gradient-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="chart-widget-dashboard">
                          <div class="media">
                            <div class="media-body">
                              <h5 class="mt-0 mb-0 f-w-600"><i data-feather="dollar-sign"></i><span class="counter">4986</span></h5>
                              <p>کل فروش</p>
                            </div><i data-feather="shopping-cart"></i>
                          </div>
                          <div class="dashboard-chart-container">
                            <div class="small-chart-gradient-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="chart-widget-dashboard">
                          <div class="media">
                            <div class="media-body">
                              <h5 class="mt-0 mb-0 f-w-600"><i data-feather="dollar-sign"></i><span class="counter">8568</span></h5>
                              <p>ارزش کل</p>
                            </div><i data-feather="sun"></i>
                          </div>
                          <div class="dashboard-chart-container">
                            <div class="small-chart-gradient-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>ارزیابی محصول</h5>
                        <div class="card-header-right">
                          <ul class="list-unstyled card-option">
                            <li><i class="icofont icofont-simple-left"></i></li>
                            <li><i class="view-html fa fa-code"></i></li>
                            <li><i class="icofont icofont-maximize full-card"></i></li>
                            <li><i class="icofont icofont-minus minimize-card"></i></li>
                            <li><i class="icofont icofont-refresh reload-card"></i></li>
                            <li><i class="icofont icofont-error close-card"></i></li>
                          </ul>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="show-value-top d-flex">
                          <div class="value-left d-inline-block">
                            <div class="square bg-primary d-inline-block"></div><span>مجموع درآمد</span>
                          </div>
                          <div class="value-right d-inline-block">
                            <div class="square d-inline-block bg-secondary"></div><span>مجموع مالیات</span>
                          </div>
                        </div>
                        <div class="smooth-chart flot-chart-container"></div>
                        <div class="code-box-copy">
                          <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                          <pre><code class="language-html" id="example-head">&lt;!-- Cod Box Copy begin --&gt;
  &lt;div class="show-value-top d-flex"&gt;
    &lt;div class="value-left d-inline-block"&gt;
      &lt;div class="square bg-primary d-inline-block"&gt;&lt;/div&gt;
      &lt;span&gt;Total Earning&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="value-right d-inline-block"&gt;
      &lt;div class="square d-inline-block bg-secondary"&gt;&lt;/div&gt;
      &lt;span&gt;Total Tax&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="smooth-chart flot-chart-container"&gt;&lt;/div&gt;
&lt;!-- Cod Box Copy end --&gt;</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 xl-100">
                <div class="card">
                  <div class="card-header">
                    <h5>فعالیت</h5>
                    <div class="card-header-right">
                      <ul class="list-unstyled card-option">
                        <li><i class="icofont icofont-simple-left"></i></li>
                        <li><i class="view-html fa fa-code"></i></li>
                        <li><i class="icofont icofont-maximize full-card"></i></li>
                        <li><i class="icofont icofont-minus minimize-card"></i></li>
                        <li><i class="icofont icofont-refresh reload-card"></i></li>
                        <li><i class="icofont icofont-error close-card"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body activity-scroll">
                    <div class="activity">
                      <div class="media">
                        <div class="gradient-round m-r-30 gradient-line-1"><i data-feather="shopping-bag"></i></div>
                        <div class="media-body">
                          <h6>فروش جدید <span class="pull-right f-14">جدید</span></h6>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.</p>
                        </div>
                      </div>
                      <div class="media">
                        <div class="gradient-round m-r-30 gradient-line-1"><i data-feather="message-circle"></i></div>
                        <div class="media-body">
                          <h6>پیام جدید <span class="pull-right f-14">14دقیقه پیش</span></h6>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.</p>
                        </div>
                      </div>
                      <div class="media">
                        <div class="gradient-round m-r-30 small-line"><i data-feather="minus-circle"></i></div>
                        <div class="media-body">
                          <h6>گزارش جدید <span class="pull-right f-14">14دقیقه پیش</span></h6>
                          <p class="activity-xl">لورم ایپسوم متن ساختگی با تولید سادگی.</p>
                        </div>
                      </div>
                      <div class="media">
                        <div class="gradient-round m-r-30 gradient-line-1"><i data-feather="shopping-bag"></i></div>
                        <div class="media-body">
                          <h6>فروش جدید <span class="pull-right f-14">14دقیقه پیش</span></h6>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.</p>
                        </div>
                      </div>
                      <div class="media">
                        <div class="gradient-round m-r-30 medium-line"><i data-feather="tag"></i></div>
                        <div class="media-body">
                          <h6>بازدید های جدید <span class="pull-right f-14">14دقیقه پیش</span></h6>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.</p>
                        </div>
                      </div>
                    </div>
                    <div class="code-box-copy">
                      <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head1" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                      <pre><code class="language-html" id="example-head1">&lt;!-- Cod Box Copy begin --&gt;
&lt;div class="activity"&gt;
  &lt;div class="media"&gt;
    &lt;div class="gradient-round m-r-30 gradient-line-1"&gt;
      &lt;i data-feather="shopping-bag"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="media-body"&gt;
      &lt;h6&gt;New Sale &lt;span class="pull-right f-14"&gt;New&lt;/span&gt;&lt;/h6&gt;
      &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="media"&gt;
    &lt;div class="gradient-round m-r-30 gradient-line-1"&gt;
      &lt;i data-feather="message-circle"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="media-body"&gt;
      &lt;h6&gt;New Message &lt;span class="pull-right f-14"&gt;14m Ago&lt;/span&gt;&lt;/h6&gt;
      &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="media"&gt;
    &lt;div class="gradient-round m-r-30 small-line"&gt;
      &lt;i data-feather="minus-circle"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="media-body"&gt;
      &lt;h6&gt;New Report &lt;span class="pull-right f-14"&gt;14m Ago&lt;/span&gt;&lt;/h6&gt;
      &lt;p&gt;Lorem Ipsum is simply dummy text.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="media"&gt;
    &lt;div class="gradient-round m-r-30 gradient-line-1"&gt;
      &lt;i data-feather="shopping-bag"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="media-body"&gt;
      &lt;h6&gt;New Sale &lt;span class="pull-right f-14"&gt;14m Ago&lt;/span&gt;&lt;/h6&gt;
      &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="media"&gt;
    &lt;div class="gradient-round m-r-30 medium-line"&gt;
      &lt;i data-feather="tag"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="media-body"&gt;
      &lt;h6&gt;New Visits &lt;span class="pull-right f-14"&gt;14m Ago&lt;/span&gt;&lt;/h6&gt;
      &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Cod Box Copy end --&gt;</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 xl-50">
                <div class="card">
                  <div class="card-header">
                    <h5>مجموع سود</h5><span class="d-block fonts-dashboard">تمام درآمد سفارشی</span>
                    <div class="card-header-right">
                      <ul class="list-unstyled card-option">
                        <li><i class="icofont icofont-simple-left"></i></li>
                        <li><i class="view-html fa fa-code"></i></li>
                        <li><i class="icofont icofont-maximize full-card"></i></li>
                        <li><i class="icofont icofont-minus minimize-card"></i></li>
                        <li><i class="icofont icofont-refresh reload-card"></i></li>
                        <li><i class="icofont icofont-error close-card"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="knob-block text-center">
                      <input class="knob" data-width="270" data-height="270" data-thickness=".2" data-angleoffset="90" data-fgcolor="#4466f2" data-bgcolor="#f6f7fb" data-linecap="round" value="35">
                    </div>
                    <div class="show-value d-flex">
                      <div class="value-left">
                        <div class="square bg-primary d-inline-block"></div><span>مجموع سود</span>
                      </div>
                      <div class="value-right">
                        <div class="square bg-light d-inline-block"></div><span>مجموع سرمایه گذاری</span>
                      </div>
                    </div>
                    <div class="code-box-copy">
                      <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head2" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                      <pre><code class="language-html" id="example-head2">&lt;!-- Cod Box Copy begin --&gt;
&lt;div class="knob-block text-center"&gt;
  &lt;input class="knob" data-width="270" data-height="270" data-thickness=".2" data-angleOffset=90 data-fgColor="#4466f2" data-bgColor="#f6f7fb" data-linecap=round value="35"&gt;
&lt;/div&gt;
&lt;div class="show-value d-flex"&gt;
  &lt;div class="value-left"&gt;
    &lt;div class="square bg-primary d-inline-block"&gt;&lt;/div&gt;
    &lt;span&gt;Total Profit&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="value-right"&gt;
    &lt;div class="square bg-light d-inline-block"&gt;&lt;/div&gt;
    &lt;span&gt;Total Investment&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Cod Box Copy end --&gt;</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 xl-50 col-md-6">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body progress-media">
                        <div class="media">
                          <div class="media-body">
                            <h5>مجموع نظرات</h5><span class="mb-0 d-block">نظر مشتری</span>
                          </div><i data-feather="thumbs-up"></i>
                        </div>
                        <div class="progress-bar-showcase">
                          <div class="progress sm-progress-bar">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="progress-change"><span>تغییر</span><span class="pull-right">95%</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body progress-media">
                        <div class="media">
                          <div class="media-body">
                            <h5>مجموع بازخورد</h5><span class="mb-0 d-block">بازخورد</span>
                          </div><i data-feather="message-circle"></i>
                        </div>
                        <div class="progress-bar-showcase">
                          <div class="progress sm-progress-bar">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="progress-change"><span>تغییر</span><span class="pull-right">85%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 xl-100 col-md-12">
                <div class="card user-card">
                  <div class="card-body">
                    <div class="online-user">
                      <h5 class="font-primary f-18 mb-0">آنلاین</h5>
                    </div>
                    <div class="user-card-image"><img class="img-fluid rounded-circle image-radius" src="../assets/images/dashboard/designer.jpg" alt=""></div>
                    <div class="user-deatils text-center">
                      <h5>آرش خادملو</h5>
                      <h6 class="mb-0">marshikisteen@gmail.com</h6>
                    </div>
                    <div class="user-badge text-center"><a class="badge badge-pill badge-light" href="#">داشبورد</a><a class="badge badge-pill badge-light" href="#">رابط کاربری</a><a class="badge badge-pill badge-light" href="#">تجربه کاربری</a><a href="#"><span class="badge badge-pill badge-light active">2+</span></a></div>
                    <div class="card-footer row pb-0 text-center">
                      <div class="col-6">
                        <div class="d-flex user-footer"><i class="m-r-10" data-feather="message-square"></i>
                          <h6 class="f-18 mb-0">پیام</h6>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-flex user-footer"><i class="m-r-10" data-feather="briefcase"></i>
                          <h6 class="f-18 mb-0">نمونه کار</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card height-equal">
                  <div class="card-header card-header-border">
                    <div class="row">
                      <div class="col-sm-6">
                        <h5>کاربر جدید</h5>
                      </div>
                      <div class="col-sm-6">
                        <div class="pull-right right-header"><span>ماه</span><span>
                            <button class="btn btn-primary btn-pill">امروز</button></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="new-users">
                      <div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/2.png" alt="">
                        <div class="media-body">
                          <h6 class="mb-0 f-w-700">آرش خادملو</h6>
                          <p>طراح ویژوال، شرکت گیتهاب</p>
                        </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">فالو</button></span>
                      </div>
                      <div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/5.jpg" alt="">
                        <div class="media-body">
                          <h6 class="mb-0 f-w-700">آرش خادملو</h6>
                          <p>طراح ویژوال، شرکت گیتهاب</p>
                        </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">فالو</button></span>
                      </div>
                      <div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/3.jpg" alt="">
                        <div class="media-body">
                          <h6 class="mb-0 f-w-700">آرش خادملو</h6>
                          <p>طراح ویژوال، شرکت گیتهاب</p>
                        </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">فالو</button></span>
                      </div>
                      <div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/4.jpg" alt="">
                        <div class="media-body">
                          <h6 class="mb-0 f-w-700">آرش خادملو</h6>
                          <p>طراح ویژوال، شرکت گیتهاب</p>
                        </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">فالو</button></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card height-equal">
                  <div class="card-header card-header-border">
                    <div class="row">
                      <div class="col-sm-7">
                        <h5>اطلاعیه اخیر</h5>
                      </div>
                      <div class="col-sm-5">
                        <div class="pull-right right-header">
                          <div class="onhover-dropdown">
                            <button class="btn btn-primary btn-pill" type="button">همه <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                            <div class="onhover-show-div right-header-dropdown"><a class="d-block" href="#">Order</a><a class="d-block" href="#">دانلود</a><a class="d-block" href="#">زباله</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body recent-notification">
                    <div class="media">
                      <h6>09:00</h6>
                      <div class="media-body"><span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                    <div class="media">
                      <h6>10:50</h6>
                      <div class="media-body"><span>لورم ایپسوم متن.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                    <div class="media">
                      <h6>01:00</h6>
                      <div class="media-body"><span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                    <div class="media">
                      <h6>05:00</h6>
                      <div class="media-body"><span>لورم ایپسوم متن ساختگی با تولید.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                    <div class="media">
                      <h6>12:00</h6>
                      <div class="media-body"><span>لورم ایپسوم متن ساختگی با تولید.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                    <div class="media">
                      <h6>08:20</h6>
                      <div class="media-body"><span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.</span>
                        <p class="f-12">توسط آرش</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>محاسبه</h5>
                    <div class="card-header-right">
                      <ul class="list-unstyled card-option">
                        <li><i class="icofont icofont-simple-left"></i></li>
                        <li><i class="view-html fa fa-code"></i></li>
                        <li><i class="icofont icofont-maximize full-card"></i></li>
                        <li><i class="icofont icofont-minus minimize-card"></i></li>
                        <li><i class="icofont icofont-refresh reload-card"></i></li>
                        <li><i class="icofont icofont-error close-card"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="show-value-top d-flex">
                      <div class="value-left d-inline-block">
                        <div class="square bg-primary d-inline-block"></div><span>درآمد کل</span>
                      </div>
                      <div class="value-right d-inline-block">
                        <div class="square d-inline-block bg-smooth-chart"></div><span>مجموع تلفات</span>
                      </div>
                    </div>
                    <div class="ct-svg flot-chart-container"></div>
                    <div class="code-box-copy">
                      <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head3" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                      <pre><code class="language-html" id="example-head3">&lt;!-- Cod Box Copy begin --&gt;
&lt;div class="show-value-top d-flex"&gt;
  &lt;div class="value-left d-inline-block"&gt;
    &lt;div class="square bg-primary d-inline-block"&gt;&lt;/div&gt;
    &lt;span&gt;Total Income&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="value-right d-inline-block"&gt;
    &lt;div class="square d-inline-block bg-smooth-chart"&gt;&lt;/div&gt;
    &lt;span&gt;Total Loss&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="ct-svg flot-chart-container"&gt;&lt;/div&gt;
&lt;!-- Cod Box Copy end --&gt;</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 xl-100">
                <div class="card">
                  <div class="card-header card-header-border chat-header-default">
                    <div class="row">
                      <div class="col-sm-6">
                        <h5>مکالمات</h5>
                      </div>
                      <div class="col-sm-6">
                        <div class="right-header pull-right m-t-5">
                          <div class="onhover-dropdown"><i data-feather="more-horizontal"></i>
                            <div class="onhover-show-div right-header-dropdown more-dropdown"><a class="d-block" href="#">مشاهده</a><a class="d-block" href="#">رسانه</a><a class="d-block" href="#">جستجو</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body chat-box dashboard-chat">
                    <div class="chat">
                      <div class="media left-side-chat"><img class="rounded-circle chat-user-img img-60 m-r-20" src="../assets/images/user/4.jpg" alt="">
                        <div class="media-body">
                          <div class="message-main">
                            <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
                          </div>
                        </div>
                      </div>
                      <div class="media right-side-chat">
                        <div class="media-body text-right">
                          <div class="message-main">
                            <p class="pull-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان</p>
                            <div class="clearfix"></div>
                          </div>
                          <div class="sub-message message-main">
                            <p class="pull-right mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
                            <div class="clearfix"></div>
                          </div>
                        </div><img class="rounded-circle chat-user-img img-60 m-l-20" src="../assets/images/user/5.jpg" alt="">
                      </div>
                      <div class="media left-side-chat"><img class="rounded-circle chat-user-img img-60 m-r-20" src="../assets/images/user/4.jpg" alt="">
                        <div class="media-body">
                          <div class="message-main">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
                          </div>
                          <div class="sub-message message-main smiley-bg"><img src="../assets/images/dashboard/smily.png" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media chat-footer bg-primary"><i class="icon-face-smile"></i>
                    <div class="media-body">
                      <input class="form-control" type="text" placeholder="پیام خود را تایپ کنید" required="">
                    </div><i data-feather="send"></i>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 xl-100">
                <div class="card">
                  <div class="card-header card-header-border">
                    <div class="row">
                      <div class="col-sm-6">
                        <h5 class="align-abjust">به روز رسانی فروش</h5>
                      </div>
                      <div class="col-sm-6">
                        <div class="pull-right right-header">
                          <div class="onhover-dropdown">
                            <button class="btn btn-primary btn-pill" type="button">همه <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                            <div class="onhover-show-div right-header-dropdown"><a class="d-block" href="#">حمل و نقل</a><a class="d-block" href="#">خرید</a><a class="d-block" href="#">مجموع فروش</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="activity"></i>
                          <h5 class="mb-0 f-18">+500</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="anchor"></i>
                          <h5 class="mb-0 f-18">+120</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="box"></i>
                          <h5 class="mb-0 f-18">-410</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="book"></i>
                          <h5 class="mb-0 f-18">-155</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="compass"></i>
                          <h5 class="mb-0 f-18">+920</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center"><i data-feather="cpu"></i>
                          <h5 class="mb-0 f-18">+500</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center mb-0 xs-mb-selling"><i data-feather="dollar-sign"></i>
                          <h5 class="mb-0 f-18">+500</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center mb-0 xs-mb-selling"><i data-feather="slack"></i>
                          <h5 class="mb-0 f-18">+120</h5>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="selling-update text-center mb-0"><i data-feather="umbrella"></i>
                          <h5 class="mb-0 f-18">-410</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Container-fluid Ends-->
        </div>
        <!-- footer start-->
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 footer-copyright">
                <p class="mb-0">کپی رایت 2018 © اندلس همه حقوق محفوظ است.</p>
              </div>
              <div class="col-md-6">
                <p class="pull-right mb-0">دست ساز و ساخته شده با<i class="fa fa-heart"></i></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  
</template>

<script>
export default {
  layout: 'default',
   
}
</script>

 