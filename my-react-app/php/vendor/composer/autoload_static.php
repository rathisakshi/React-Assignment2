<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf432094603895d21da499fa35b5daa17
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf432094603895d21da499fa35b5daa17::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf432094603895d21da499fa35b5daa17::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
