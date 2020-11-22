<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lily' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aH,2w,T(c+,?sCmH5Z]a=s5-),8ipvlHA}A[9G3Rq7A+CE34hLT2~2v0M`e=Oje#' );
define( 'SECURE_AUTH_KEY',  'd3,y!S:zB#el^|f1Ej&Jll%n_u?^>DGpD,,uL )K2ndu)dje,ncNN L-y.~AK.~/' );
define( 'LOGGED_IN_KEY',    ' Nh_yQ-v7X^v|^f,#g;X.JR.N+CIx@D@146d?w-)R7*] *KMty4qaVf[G-VS7HUW' );
define( 'NONCE_KEY',        '?8vSJz,19|AD=Uzw+[Vqyhm|qs9Z a2l/%Gase=]ViM`&KZIN`C*3ueE1^)<cc)X' );
define( 'AUTH_SALT',        'Om<(D!#M3AJ|djE!V0`b_Dg4>~C,[7/#2Su@N79,%W:qhSh_,M_(Yf,Z}D) &yR~' );
define( 'SECURE_AUTH_SALT', 'u`;^^@Y3#Ot{x<rsjJ]/=]93fKSE VlU&u=DwAQ,O#^$4o&aw[_>} fj(Vw68A/E' );
define( 'LOGGED_IN_SALT',   'F8;if}9mB},&q$R;yz9T8}>RUd@@BGh{?@4$c*1SD7>/{8lpjfH_J$L++.!a#A4Y' );
define( 'NONCE_SALT',       '1{LG8X`A*/vpp9&^/<`nb7bwa:@)oT>mb<<[%f`u!zN,]xVu<k;m?`=P#8B;xLM_' );

define('JWT_AUTH_SECRET_KEY', 'secret');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
