<?php
/* @var $models common\models\Pages */
/* @var $pageOne common\models\Page */

use common\models\Setting;
use yii\widgets\LinkPager;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;
use frontend\widget\standart\StandartWidget;
use common\models\Page;
use common\models\Pages;
use common\models\Pagetext;
use common\models\Pagepdf;
use common\models\Pageteam;

$setting = Setting::findOne(1);
$this->title = $pageOne->titleTranslate;

$pdf20 = [];
foreach (Pagepdf::find()->where(['status' => 20,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf201):
$pdf20 = $pdf201;
endforeach;
$pdf21 = [];
foreach (Pagepdf::find()->where(['status' => 21,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf211):
$pdf21 = $pdf211;
endforeach;
$pdf22 = [];
foreach (Pagepdf::find()->where(['status' => 22,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf221):
$pdf22 = $pdf221;
endforeach;
$pdf23 = [];
foreach (Pagepdf::find()->where(['status' => 23,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf231):
$pdf23 = $pdf231;
endforeach;
$pdf24 = [];
foreach (Pagepdf::find()->where(['status' => 24,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf241):
$pdf24 = $pdf241;
endforeach;
$pdf25 = [];
foreach (Pagepdf::find()->where(['status' => 25,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf251):
$pdf25 = $pdf251;
endforeach;
$pdf26 = [];
foreach (Pagepdf::find()->where(['status' => 26,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf261):
$pdf26 = $pdf261;
endforeach;

//dd($pageOne);
$file = Page::find()->all();
$this->registerJs(<<<JS
      $(document).ready(function () {
         $(".owl-carousel").owlCarousel({
            items: 6,
            loop: true,
            margin: 20,
            // autoplay: true,
            // autoplayHoverPause: true,
            // autoplayTimeout:2000,
            responsive: {
               0: {
                  items: 2
               },
               600: {
                  items: 4
               },
               1000: {
                  items: 5
               }
            }
         });
      });
JS
    , 3)


?>
<header class="header no-index">
    <div class="header__inner">
        <div class="header-overlay"></div>
        <div class="container">
            <div class="header__top">

                    <a href="<?= Url::to(['/'])?>" class="header__top-logo">
                        <img src="/backend/web/uploads/<?= $setting->logo?>" alt="logo">
                        <?=Yii::t('app', 'O‘zbekiston davlat jahon tillari universiteti')?>
                    </a>

                    <div class="header__top-menu">
                        <a href="https://webmail.uzswlu.uz/" class="top-menu-link">
                            <img src="/frontend/web/templates/img/header/message-square.png" alt=""> <?=Yii::t('app', 'Korporativ pochta')?>
                        </a>
                        <a href="<?= Url::to(['./site/reception'])?>" class="top-menu-link">
                            <img src="/frontend/web/templates/img/header/message-circle.png" alt=""> <?=Yii::t('app', 'Virtual qabulxona')?>
                        </a>
                        <a href="<?= Url::to(['./karyera-markazi'])?>" class="top-menu-link">
                            
                            <?=Yii::t('app', 'Karyera markazi')?>
                        </a>
                            
                        
                        <a href="<?= Url::to(['./site/main'])?>" class="top-menu-link">
                            <svg viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M14.0383 16.0711L13.495 11.7212C13.418 11.1051 13.1186 10.5383 12.653 10.1275C12.1875 9.71661 11.5879 9.49 10.9669 9.49023H9.09589C8.47525 9.49041 7.87604 9.71721 7.41083 10.128C6.94562 10.5388 6.64643 11.1054 6.56947 11.7212L6.02531 16.0711C5.99545 16.3101 6.01677 16.5527 6.08786 16.7828C6.15895 17.0129 6.27818 17.2253 6.43764 17.4058C6.5971 17.5863 6.79313 17.7308 7.01272 17.8297C7.23232 17.9286 7.47044 17.9797 7.71128 17.9795H12.3532C12.594 17.9796 12.832 17.9284 13.0515 17.8294C13.271 17.7305 13.4669 17.586 13.6263 17.4055C13.7857 17.225 13.9048 17.0127 13.9759 16.7826C14.0469 16.5526 14.0682 16.31 14.0383 16.0711V16.0711Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                        d="M10.0316 6.09455C11.4382 6.09455 12.5784 4.95431 12.5784 3.54776C12.5784 2.14121 11.4382 1.00098 10.0316 1.00098C8.6251 1.00098 7.48486 2.14121 7.48486 3.54776C7.48486 4.95431 8.6251 6.09455 10.0316 6.09455Z"
                                        stroke-width="1.5"></path>
                                <path
                                        d="M3.24034 8.64181C4.17804 8.64181 4.9382 7.88165 4.9382 6.94395C4.9382 6.00625 4.17804 5.24609 3.24034 5.24609C2.30264 5.24609 1.54248 6.00625 1.54248 6.94395C1.54248 7.88165 2.30264 8.64181 3.24034 8.64181Z"
                                        stroke-width="1.5"></path>
                                <path
                                        d="M16.8233 8.64181C17.761 8.64181 18.5212 7.88165 18.5212 6.94395C18.5212 6.00625 17.761 5.24609 16.8233 5.24609C15.8856 5.24609 15.1255 6.00625 15.1255 6.94395C15.1255 7.88165 15.8856 8.64181 16.8233 8.64181Z"
                                        stroke-width="1.5"></path>
                                <path
                                        d="M16.8234 11.1875H17.0832C17.4851 11.1875 17.874 11.33 18.1807 11.5897C18.4874 11.8495 18.692 12.2096 18.7581 12.6061L19.0408 14.3039C19.0814 14.5472 19.0685 14.7963 19.003 15.0341C18.9375 15.2719 18.821 15.4925 18.6616 15.6807C18.5021 15.8689 18.3037 16.02 18.0799 16.1237C17.8561 16.2274 17.6125 16.2811 17.3659 16.2811H14.2766M3.24053 11.1875H2.98076C2.57884 11.1875 2.18994 11.33 1.88324 11.5897C1.57655 11.8495 1.37194 12.2096 1.30582 12.6061L1.02313 14.3039C0.982561 14.5472 0.995473 14.7963 1.06097 15.0341C1.12646 15.2719 1.24296 15.4925 1.40237 15.6807C1.56178 15.8689 1.76027 16.02 1.98403 16.1237C2.20779 16.2274 2.45145 16.2811 2.69807 16.2811H5.78732L3.24053 11.1875Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            

                        </a>

                        <div class="top-menu-link search-block">
                            <div class="search-open">
                                <img src="/frontend/web/templates/img/header/search.png" alt="">
                            </div>

                            <div class="search-form d-none">
                                <input type="text" class="search-input">
                                <button class="search-btn">
                                </button>
                                <a href="#" class="search-close">x</a>
                            </div>
                        </div>

                        <div class="top-menu-link lang-block">
                            <?php if(\Yii::$app->language == 'uz'):?>
                                <img src="/frontend/web/templates/img/header/uz.png" class="flag"> UZ
                            <?php elseif(\Yii::$app->language == 'ru'):?>
                                <img src="/frontend/web/templates/img/header/ru.png" class="flag"> RU
                            <?php elseif(\Yii::$app->language == 'en'):?>
                                <img src="/frontend/web/templates/img/header/en.png" class="flag"> EN
                            <?php endif;?>
                            <img src="/frontend/web/templates/img/header/Polygon.png" class="arrow">
                            <div class="lang-open">
                                <a href="<?= Yii::$app->params['og_language_uz']['content']?>" class="lang-link">
                                    <img src="/frontend/web/templates/img/header/uz.png" alt=""> Uz
                                </a>
                                <a href="<?= Yii::$app->params['og_language_ru']['content']?>" class="lang-link">
                                    <img src="/frontend/web/templates/img/header/ru.png" alt=""> Ru
                                </a>
                                <a href="<?= Yii::$app->params['og_language_en']['content']?>" class="lang-link">
                                    <img src="/frontend/web/templates/img/header/en.png" alt=""> En
                                </a>
                            </div>

                        </div>
                        
                    </div>

                </div>
            </div>
        <div class="line"></div>

        <div class="container">
            <div class="header__menu">

               <nav class="nav">
                        <ul class="menu-list">
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Universitet')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 1,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                             <li>
                                <a href="<?=Url::to(['./news'])?>" class="menu-link"><?=Yii::t('app', 'Yangiliklar')?></a>
                            </li>


                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'BRM')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <div class="submenu-box">

                                    <ul class="submenu-list">
                                        <?php foreach (Pages::find()->where(['id' => 16,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 12,])->andWhere(['parent_id' => null])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                    <ul class="submenu-list">

                                        <?php foreach (Pages::find()->where(['id' => 16,])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 11,])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                    <ul class="submenu-list">

                                        <?php foreach (Pages::find()->where(['id' => 16,])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 9,])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Abituriyentlar')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <div class="submenu-box">

                                    <ul class="submenu-list">
                                        <?php foreach (Pages::find()->where(['id' => 3,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 11,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                    <?php foreach (Pages::find()->where(['id' => 3,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 12,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                    </ul>
                                    <ul class="submenu-list">

                                      <?php foreach (Pages::find()->where(['id' => 2,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                    </ul>
                                    
                                </div>
                                
                            </li>
                            
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Ta`lim yo`nalishlari')?>
                                   <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 20,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Faoliyat')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 4,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 11,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                            
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Hujjatlar')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 7,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>
                            
                           <li>
                                <a href="<?=Url::to(['./contact'])?>" class="menu-link"><?=Yii::t('app', 'Aloqa')?></a>
                            </li>
                            <li>
                                <a href="<?=Url::to(['./site/video'])?>" class="menu-link"><?=Yii::t('app', 'Video')?></a>
                            </li>

                        </ul>
                    </nav>
            </div>
        </div>

        <div class="mobile-haeder">
            <div class="mobile-logo">
                <a href="<?= Url::to(['/'])?>">
                    <img src="/backend/web/uploads/<?= $setting->logo?>" alt="">
                </a>
                <?=Yii::t('app', 'O‘zbekiston davlat jahon tillari universiteti')?>

            </div>
            <div class="menu-burger">
                ...
            </div>
            <div class="mobile-nav">
                <div class="nav-top header__top-menu">
                    <a href="#" class="top-menu-link">
                        <img src="/frontend/web/templates/img/header/message-circle.png" alt=""> <?=Yii::t('app', 'Virtual qabulxona')?>
                    </a>
                    <a href="#" class="top-menu-link">
                        <img src="/frontend/web/templates/img/header/message-square.png" alt=""> <?=Yii::t('app', 'Kontaktlar')?>
                    </a>

                    <div class="top-menu-link lang-block">
                        <img src="/frontend/web/templates/img/header/uz.png" class="flag"> UZ
                        <img src="/frontend/web/templates/img/header/Polygon.png" class="arrow">
                        <div class="lang-open">
                            <a href="#" class="lang-link">
                                <img src="/frontend/web/templates/img/header/uz.png" alt=""> Uz
                            </a>
                            <a href="#" class="lang-link">
                                <img src="/frontend/web/templates/img/header/ru.png" alt=""> Ru
                            </a>
                            <a href="#" class="lang-link">
                                <img src="/frontend/web/templates/img/header/en.png" alt=""> En
                            </a>
                        </div>
                    </div>
                    <a href="#" class="top-menu-link">
                        <svg viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M14.0383 16.0711L13.495 11.7212C13.418 11.1051 13.1186 10.5383 12.653 10.1275C12.1875 9.71661 11.5879 9.49 10.9669 9.49023H9.09589C8.47525 9.49041 7.87604 9.71721 7.41083 10.128C6.94562 10.5388 6.64643 11.1054 6.56947 11.7212L6.02531 16.0711C5.99545 16.3101 6.01677 16.5527 6.08786 16.7828C6.15895 17.0129 6.27818 17.2253 6.43764 17.4058C6.5971 17.5863 6.79313 17.7308 7.01272 17.8297C7.23232 17.9286 7.47044 17.9797 7.71128 17.9795H12.3532C12.594 17.9796 12.832 17.9284 13.0515 17.8294C13.271 17.7305 13.4669 17.586 13.6263 17.4055C13.7857 17.225 13.9048 17.0127 13.9759 16.7826C14.0469 16.5526 14.0682 16.31 14.0383 16.0711V16.0711Z"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                    d="M10.0316 6.09455C11.4382 6.09455 12.5784 4.95431 12.5784 3.54776C12.5784 2.14121 11.4382 1.00098 10.0316 1.00098C8.6251 1.00098 7.48486 2.14121 7.48486 3.54776C7.48486 4.95431 8.6251 6.09455 10.0316 6.09455Z"
                                    stroke-width="1.5"></path>
                            <path
                                    d="M3.24034 8.64181C4.17804 8.64181 4.9382 7.88165 4.9382 6.94395C4.9382 6.00625 4.17804 5.24609 3.24034 5.24609C2.30264 5.24609 1.54248 6.00625 1.54248 6.94395C1.54248 7.88165 2.30264 8.64181 3.24034 8.64181Z"
                                    stroke-width="1.5"></path>
                            <path
                                    d="M16.8233 8.64181C17.761 8.64181 18.5212 7.88165 18.5212 6.94395C18.5212 6.00625 17.761 5.24609 16.8233 5.24609C15.8856 5.24609 15.1255 6.00625 15.1255 6.94395C15.1255 7.88165 15.8856 8.64181 16.8233 8.64181Z"
                                    stroke-width="1.5"></path>
                            <path
                                    d="M16.8234 11.1875H17.0832C17.4851 11.1875 17.874 11.33 18.1807 11.5897C18.4874 11.8495 18.692 12.2096 18.7581 12.6061L19.0408 14.3039C19.0814 14.5472 19.0685 14.7963 19.003 15.0341C18.9375 15.2719 18.821 15.4925 18.6616 15.6807C18.5021 15.8689 18.3037 16.02 18.0799 16.1237C17.8561 16.2274 17.6125 16.2811 17.3659 16.2811H14.2766M3.24053 11.1875H2.98076C2.57884 11.1875 2.18994 11.33 1.88324 11.5897C1.57655 11.8495 1.37194 12.2096 1.30582 12.6061L1.02313 14.3039C0.982561 14.5472 0.995473 14.7963 1.06097 15.0341C1.12646 15.2719 1.24296 15.4925 1.40237 15.6807C1.56178 15.8689 1.76027 16.02 1.98403 16.1237C2.20779 16.2274 2.45145 16.2811 2.69807 16.2811H5.78732L3.24053 11.1875Z"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <?=Yii::t('app', 'Universitet Xodimlari')?>
                    </a><br>
                    <div class="top-menu-link search-block">
                        <div class="search-form d-none">
                            <input type="text" class="search-input">
                            <button class="search-btn">
                            </button>
                            <a href="#" class="search-close">x</a>
                        </div>
                        <div class="search-open">
                            <img src="/frontend/web/templates/img/header/search.png" alt="">
                        </div>
                    </div>

                </div>

                <nav class="mobile-navbar">
                    <ul class="menu-list">
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Universitet')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 1,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                             <li>
                                <a href="<?=Url::to(['./news'])?>" class="menu-link"><?=Yii::t('app', 'Yangiliklar')?></a>
                            </li>


                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'BRM')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <div class="submenu-box">

                                    <ul class="submenu-list">
                                        <?php foreach (Pages::find()->where(['id' => 16,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 12,])->andWhere(['parent_id' => null])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                    <ul class="submenu-list">

                                        <?php foreach (Pages::find()->where(['id' => 16,])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 11,])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                    <ul class="submenu-list">

                                        <?php foreach (Pages::find()->where(['id' => 16,])->all() as $pages):?>
                                            <?php foreach (Page::find()->where(['status' => 9,])->all() as $page):?>
                                                <?php if($page->pages_id == $pages->id): ?>
                                                    <li>
                                                        <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                            <?= $page->TitleTranslate?>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Bo`lajak talabalar')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 3,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 11,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                    <?php foreach (Pages::find()->where(['id' => 3,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 12,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>
                            
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Ta`lim yo`nalishlari')?>
                                   <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 20,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Faoliyat')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 4,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 11,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Interaktiv xizmatlar')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 6,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 11,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>

                                    <?php foreach (Pages::find()->where(['id' => 6,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>

                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Hujjatlar')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 7,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>
                            <li class="sub">
                                <a href="#" class="menu-link sub"><?=Yii::t('app', 'Qabul')?>
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                    </svg>
                                </a>
                                <ul class="submenu-list">
                                    <?php foreach (Pages::find()->where(['id' => 2,])->andWhere(['parent_id' => null])->all() as $pages):?>
                                        <?php foreach (Page::find()->where(['status' => 10,])->andWhere(['parent_id' => null])->all() as $page):?>
                                            <?php if($page->pages_id == $pages->id): ?>
                                                <li>
                                                    <a href="<?=Url::to(['/site/page', 'url' => $page->url1])?>" class="submenu-link">
                                                        <?= $page->TitleTranslate?>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                </ul>
                            </li>
                           <li>
                                <a href="<?=Url::to(['./site/contact'])?>" class="menu-link"><?=Yii::t('app', 'Aloqa')?></a>
                            </li>

                        </ul>
                </nav>
            </div>
        </div>

    </div>
</header>


                

            
<?php if($pageOne->id == 10):?>            
            
<section>
    <div class="facts__content">
        <div class="facts-overlay"></div>
    <div class="container py-2">
        <?php foreach (Pageteam::find()->where(['status' => 10,])->andWhere(['page_id' => $pageOne->id])->all() as $team):?>

        <article class="postcard light blue">
            <a class="postcard__img_link" href="#">
                <img class="postcard__img" src="<?=$team->avatar?>" alt="Image Title" />	
            </a>
            <div class="postcard__text t-dark">
                <h1 class="postcard__title red"><a href="#"><?=$team->FullnameTranslate?></a></h1>
                <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-person-alt mr-2"></i><?=$team->OccupationTranslate?>
                    </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                    <?=$team->DescriptionTranslate?>
                </div>

            </div>
        </article>

        <?php endforeach; ?>

    </div>
        </div>
        </div>
</section>

<?php else: ?>            
<div class="container">
    <div class="row text-center">
        <?php foreach (Pageteam::find()->where(['status' => 10,])->andWhere(['page_id' => $pageOne->id])->all() as $team):?>
            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                    <img src="<?=$team->avatar?>" alt="" style="width: 200px; height: 200px" class="drugging img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                    <h5 class="mb-0"><?=$team->FullnameTranslate?></h5>

                    <span class="small text-uppercase text-muted"><?=$team->OccupationTranslate?></span>
                    <?php  if($team->page_id == 10):?>
                        <h5 class="mb-0" style="text-align: left"><?=$team->DescriptionTranslate?></h5>
                    <?php else:?>
                        <p style="display: none"></p>
                    <?php endif;?>
				</div>
            </div>
        <?php endforeach; ?>

    </div>
</div>
<?php endif; ?>      


<?php if($pageOne->id == 36):?>   
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <div class="services__list col-lg-12 col-sm-12" style="text-align: center;">
                        <a href="<?=Url::to(['/site/international'])?>" class="services__list-item" style="margin-bottom: 0; display: inline-block;">
                            <h2 class="sec-title" style="margin-bottom: 0;"><?=Yii::t('app', 'Xorijiy abituriyentlari uchun ariza berish')?></h2>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                 class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 192 512">
                                <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php else:?>
<div style="display:none;"></div>
<?php endif;?>                             

    
<?php foreach (Pagetext::find()->where(['status' => 10,])->andWhere(['page_id' => $pageOne->id])->all() as $text):?>
    <section class="faculty" style="margin-top: -100px">
        <div class="container">
            <div class="faculty__content row">
                <div class="facts__title"><?=$text->DescriptionTranslate?></div>
            </div>
        </div>
    </section>
<?php endforeach; ?>
 
<?php if($pdf26 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2026')?></h2>
                    
                    
                    <?php foreach (Pagepdf::find()->where(['status' => 26,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>

<?php if($pdf25 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2025')?></h2>
                    
                    
                    <?php foreach (Pagepdf::find()->where(['status' => 25,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>

<?php if($pdf24 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2024')?></h2>
                    
                    
                    <?php foreach (Pagepdf::find()->where(['status' => 24,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>

<?php if($pdf23 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2023')?></h2>
                    
                    
                    <?php foreach (Pagepdf::find()->where(['status' => 23,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>




<?php if($pdf22 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2022')?></h2>
                    
                    
                    <?php foreach (Pagepdf::find()->where(['status' => 22,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>



<?php if($pdf21 == null):?>
	<div style="display:none;"></div>
<?php else: ?>
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <h2 class="sec-title"><?=Yii::t('app', '2021')?></h2>
                    <?php foreach (Pagepdf::find()->where(['status' => 21,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>
                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->title?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </div>
</section>
<?php endif;?>



<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">

                    <?php foreach (Pagepdf::find()->where(['status' => 10,])->andWhere(['page_id' => $pageOne->id])->all() as $pdf):?>

                        <div class="row">
                            <div class="services__list col-lg-11 col-sm-11">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" class="services__list-item">
                                    <img src="../../frontend/web/uploads/pdf.png" alt="" style="width: 70px; height: 50px; padding-right: 20px">
                                    <p><?=$pdf->TitleTranslate?></p>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                         class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 192 512">
                                        <path
                                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="services__list col-lg-1 col-sm-1">
                                <a href="<?=Url::to(['../backend/web/uploads/pagepdf/icon/'.$pdf->filename])?>" download>
                                    <img src="../../frontend/web/uploads/download.png" alt="" style="width: 65px; height: 65px;" >
                                </a>
                            </div>
                        </div>

                    <?php endforeach; ?>


                </ol>
            </div>
        </div>
    </div>
</section>
   
               
                    
<section class="faculty">
    <div class="container">
        <div class="faculty__content row">
            <div class="faculty__list col-lg-12 col-sm-12">
                <ol class="faculty__list-content">
                    <div class="services__list col-lg-12 col-sm-12">
                        <?php foreach (Page::find()->where(['parent_id' => $pageOne->id])->all() as $page):?>
                            <a href="<?=Url::to(['/'.$page->url1])?>" class="services__list-item">
                                <img src="../../backend/web/uploads/page/icon/<?=$page->filename?>" alt="" style="width: 50px; height: 50px">
                                <p><?=$page->TitleTranslate?></p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                                     class="svg-inline--fa fa-caret-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 192 512">
                                    <path
                                            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                                    </path>
                                </svg>
                            </a>

                        <?php endforeach; ?>
                    </div>

                </ol>
            </div>
        </div>
    </div>
</section>
                        

     

<section class="partners">
    <div class="container">
        <div class="partners__inner">
            <div class="partners__title sec-title"><?=Yii::t('app', 'Bizning hamkorlar')?></div>
            <div class="partners-slider owl-carousel">
                <div class="slider-item">
                    <img src="/frontend/web/templates/img/slider/adliya.svg" alt="">
                </div>
                <div class="slider-item">
                    <img src="/frontend/web/templates/img/slider/gerb.svg" alt="">
                </div>
                <div class="slider-item">
                    <img src="/frontend/web/templates/img/slider/lex.svg" alt="">
                </div>
                <div class="slider-item">
                    <img src="/frontend/web/templates/img/slider/mygov.svg" alt="">
                </div>
                <div class="slider-item">
                    <img src="/frontend/web/templates/img/slider/oliy.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<div class="map">
    <div class="map-btn">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="map" class="svg-inline--fa fa-map "
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
                  d="M565.6 36.24C572.1 40.72 576 48.11 576 56V392C576 401.1 569.8 410.9 560.5 414.4L392.5 478.4C387.4 480.4 381.7 480.5 376.4 478.8L192.5 417.5L32.54 478.4C25.17 481.2 16.88 480.2 10.38 475.8C3.882 471.3 0 463.9 0 456V120C0 110 6.15 101.1 15.46 97.57L183.5 33.57C188.6 31.6 194.3 31.48 199.6 33.23L383.5 94.52L543.5 33.57C550.8 30.76 559.1 31.76 565.6 36.24H565.6zM48 421.2L168 375.5V90.83L48 136.5V421.2zM360 137.3L216 89.3V374.7L360 422.7V137.3zM408 421.2L528 375.5V90.83L408 136.5V421.2z">
            </path>
        </svg>
    </div>
    <div class="map__content">
        <div class="content-header">
            <div class="header-title"><?=Yii::t('app', 'Sayt xaritasi')?></div>
            <div class="map-close"></div>
        </div>

        <div class="content-body">
            <a href="<?=Url::to(['./universitet-haqida'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                     class="svg-inline--fa fa-home " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Universitet haqida')?>
            </a>
            <a href="<?=Url::to(['./rektorat'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                     class="svg-inline--fa fa-building " role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Rektorat')?>
            </a>
            <a href="<?=Url::to(['./tuzilma'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file"
                     class="svg-inline--fa fa-file " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor"
                          d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Tuzilma')?>
            </a>
            <a href="<?=Url::to(['./universitet-nizomi'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="balance-scale"
                     class="svg-inline--fa fa-balance-scale " role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                    <path fill="currentColor"
                          d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Universitet nizomi')?>
            </a>
            <a href="<?=Url::to(['./bolimlar'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt"
                     class="svg-inline--fa fa-file-alt " role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path fill="currentColor"
                          d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Bo`limlar')?>
            </a>
            <a href="<?=Url::to(['./oliy-talim-muassasa-tarixi'])?>" class="body-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mountain"
                     class="svg-inline--fa fa-mountain " role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                    <path fill="currentColor"
                          d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z">
                    </path>
                </svg>
                <?=Yii::t('app', 'Oliy ta`lim muassasa tarixi')?>
            </a>
        </div>
    </div>
</div>