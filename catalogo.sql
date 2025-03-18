-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2025 a las 02:29:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_02_22_064529_create_movies_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `synopsis` text NOT NULL,
  `year` int(11) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `synopsis`, `year`, `cover`, `created_at`, `updated_at`) VALUES
(1, 'El origen 2', 'Dom Cobb es un ladrón especializado en robar secretos del subconsciente durante el sueño. Su habilidad lo ha convertido en un fugitivo, pero se le ofrece la oportunidad de borrar su historial criminal si logra implantar una idea en la mente de una persona. Sin embargo, esta misión es más peligrosa de lo que parece.', 2010, 'https://th.bing.com/th/id/OIP.8xCrva_QkWyr52H7_R1zSgHaLH?rs=1&pid=ImgDetMain', '2025-02-22 12:55:15', '2025-03-18 07:00:03'),
(2, 'El lobo de Wall Street', 'Basada en la historia real de Jordan Belfort, un corredor de bolsa que asciende rápidamente en Wall Street, amasando una gran fortuna mediante fraudes y corrupción. Su vida llena de excesos y fiestas lo lleva a enfrentarse al FBI.', 2013, 'https://i0.wp.com/webadictos.com/media/2014/04/el-lobo-de-wall-street-netflix.jpg?resize=800%2C670', '2025-02-22 12:55:15', '2025-03-18 06:38:16'),
(3, 'Coco', 'Miguel, un niño apasionado por la música, se embarca en una mágica aventura en la Tierra de los Muertos para descubrir la verdad sobre su familia y su conexión con la música, desafiando la prohibición impuesta por sus ancestros.', 2017, 'https://holatelcel.com/wp-content/uploads/2018/03/COCO.jpg', '2025-02-22 12:55:15', '2025-03-18 06:38:45'),
(4, 'La llegada', 'Cuando doce naves extraterrestres aterrizan en diferentes partes del mundo, la lingüista Louise Banks es reclutada por el gobierno de EE. UU. para comunicarse con los alienígenas y descubrir sus intenciones. A medida que desentraña el lenguaje de los extraterrestres, Louise se ve enfrentada a complejas cuestiones sobre el tiempo, la comunicación y la naturaleza humana.', 2016, 'https://fotos.perfil.com/2024/05/19/900/0/la-llegada-1804100.jpg', '2025-02-22 12:55:15', '2025-03-18 06:42:48'),
(5, 'Interstellar', 'En un futuro donde la Tierra se está volviendo inhabitable, un grupo de astronautas liderado por Cooper (Matthew McConaughey) es enviado a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. Mientras enfrentan desafíos cósmicos y dilemas existenciales, Cooper lucha por cumplir su misión sin perder el vínculo con su hija Murph, quien desde la Tierra intenta resolver un enigma clave para la supervivencia de la especie. Dirigida por Christopher Nolan, Interstellar combina ciencia, emoción y exploración espacial en una historia visualmente impresionante y profundamente conmovedora.', 2014, 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/297acd129204217.616629e21fe76.png', '2025-02-22 12:55:15', '2025-03-18 06:43:09'),
(6, 'Transformers: El lado oscuro de la luna', 'Cuando se descubre que el gobierno de los EE. UU. ocultó información sobre una nave Cybertroniana que se estrelló en la Luna, Optimus Prime y los Autobots deben recuperar su tecnología antes de que los Decepticons la usen para esclavizar a la humanidad. Sam Witwicky (Shia LaBeouf) se ve envuelto nuevamente en la guerra entre ambas facciones mientras intenta llevar una vida normal. Con espectaculares batallas y efectos visuales impresionantes, la película dirigida por Michael Bay cierra la trilogía original con un enfrentamiento final en Chicago que definirá el destino de la Tierra.', 2011, 'https://m.media-amazon.com/images/I/81ztWDf49nL._AC_SL1090_.jpg', '2025-02-22 12:55:15', '2025-03-18 06:43:34'),
(7, 'Avengers: Endgame', 'Después de que Thanos eliminara a la mitad de la vida en el universo, los Vengadores restantes deben encontrar una forma de revertir el desastre y restaurar el equilibrio. Con viajes en el tiempo y una batalla épica, esta película cierra la saga del Infinito en el Universo Cinematográfico de Marvel.', 2019, 'https://image.tmdb.org/t/p/original/z0gRHPKq0uX2YY5YqKRLiRCoBqN.jpg', '2025-02-22 12:55:15', '2025-03-18 06:50:17'),
(8, 'Transformers: El Último Caballero', 'Mientras el mundo se encuentra en un estado de caos, el destino de la humanidad está en juego. Cade Yeager se une a un grupo de aliados inesperados, incluidos algunos Autobots y humanos, para desentrañar un antiguo misterio relacionado con los Transformers. La clave para la supervivencia del planeta radica en el pasado de los Transformers, el cual está conectado con la historia de la humanidad, incluidas figuras históricas como el Rey Arturo.', 2017, 'https://th.bing.com/th/id/OIP.ZulC2TIxcXnyzzVw_5nIxwHaHa?rs=1&pid=ImgDetMain', '2025-02-22 12:55:15', '2025-03-18 06:44:23'),
(9, 'Joker', 'Arthur Fleck, un comediante con problemas mentales, es rechazado por la sociedad y se hunde en la locura, convirtiéndose en el icónico villano Joker. Esta película ofrece una visión cruda y psicológica de los orígenes del enemigo de Batman.', 2019, 'https://th.bing.com/th/id/R.7f70a4e12269db2e3fadf9ae4a63d2d6?rik=aINJC0f50K04rw&riu=http%3a%2f%2fes.web.img3.acsta.net%2fpictures%2f19%2f08%2f29%2f09%2f20%2f1546400.jpg&ehk=%2fbwWgQ6QExpoS9SYQYxsx6izNguhtQDtZTjtb92RS0M%3d&risl=&pid=ImgRaw&r=0', '2025-02-22 12:55:15', '2025-03-18 06:50:58'),
(10, 'Spider-Man: No Way Home', 'Peter Parker enfrenta las consecuencias de que su identidad secreta sea revelada al mundo. Buscando ayuda de Doctor Strange, provoca un accidente en el multiverso que trae de vuelta a antiguos villanos de otras realidades, poniendo en peligro su universo.', 2021, 'https://www.informador.mx/export/sites/elinformador/img/2021/11/15/fepvsn_wqasaq-i.jpg_1090526674.jpg', '2025-02-22 12:55:15', '2025-03-18 06:52:35'),
(12, 'It (Eso)', 'Un grupo de niños de Derry, Maine, enfrenta a una entidad maligna que toma la forma de Pennywise, un aterrador payaso. A medida que descubren su oscuro pasado, deberán superar sus miedos para derrotarlo antes de que sea demasiado tarde.', 2017, 'https://lh3.googleusercontent.com/-dUDmwjcppVE/WlZuDNC2wUI/AAAAAAAAxp8/ZJQKLUx61-EJPaTfwFE7eOZI6OX1GplKgCHMYCw/zrtn_013n3a69b9da_tn.jpg?imgmax=800', '2025-03-18 06:21:07', '2025-03-18 06:54:57'),
(13, 'Oppenheimer', 'Dirigida por Christopher Nolan, esta película biográfica narra la vida de J. Robert Oppenheimer, el físico teórico conocido como el \"padre de la bomba atómica\", y su papel en el Proyecto Manhattan durante la Segunda Guerra Mundial.', 2023, 'https://i.etsystatic.com/10683147/r/il/d4a024/4900691314/il_1080xN.4900691314_fu21.jpg', '2025-03-18 06:21:38', '2025-03-18 06:56:10'),
(14, 'Dune: Parte Dos', 'Continuación de la épica de ciencia ficción basada en la novela de Frank Herbert, donde Paul Atreides continúa su lucha por liberar el desértico planeta Arrakis y su valioso recurso, la especia.', 2023, 'https://www.scified.com/u/IMG_2118.jpeg', '2025-03-18 06:57:10', '2025-03-18 06:57:10'),
(15, 'Avatar: El Camino del Agua', 'James Cameron regresa con la esperada secuela de \"Avatar\", explorando nuevas regiones de Pandora y profundizando en la conexión entre los Na\'vi y su mundo natural.', 2023, 'https://gluc.mx/u/fotografias/m/2022/12/15/f768x1-89312_89439_164.jpg', '2025-03-18 06:58:04', '2025-03-18 06:58:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('3Oj8X5S5qHbVfhpXZgXiVA4A8R4hTolRwZUf9ydn', NULL, '127.0.0.1', 'PostmanRuntime/7.43.2', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVlqT2Z6cWpMNEM4SERDRFJIeXBISmY2R0tQUEpESXR6YmlzUlZmOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9tb3ZpZXMvdGVzdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1742242258),
('60jV0wtQBRcLn7hHyHWCkrJnOOm3uoLoK08Ow0vk', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUW5QbHpEM0RHd0FRWXp4ZmtDMTVTRk05ZFZuUnBPVGw2NTBlS3dlNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tb3ZpZXMvdGVzdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1742242321),
('AH1CLS9ol1abOLICG7mpSFTodW1cfTf7arJDNcNo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRmVrcmNwWWRvbjRhYVZhSWJ3aU4xTlpoMkdsR3BKSXJFeGVTNEljciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740786722),
('EZUyZJOtH99zQ6WP34goLxlIq4j21LmvTYyeZEKz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWFhEN1pqNHVQUGIyaG85WWplQXBGbkFSTUN1Q1pjTEpLNWFIekRYcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740207885),
('LhJdKscJ3k0usfLch9I7jzIgHFj0b37Zo4Uv3ATU', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicTlqUnZTOFNZc2VMRXdYdkJaRmhwUnBwZTlsbzhUTmt0MU1kb1dZQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741039430),
('OnsQL3f7TlAnfMczlOfjFwribLu8TgRudRQ6Tf0y', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYW9JOXJkQmZFelQ3aURmNGdtVTRPSFUwYUlLc2gxaUhoOUxMOTBkTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741039446),
('Vxj9edKu9bRR96uk87vIFRYYhXnobaAcQXWbcUKI', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGdnV0hlYVFSRk9XQU5JSWhuZDAzak1QNDVjMUIxNW41T0JBMlJTRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tb3ZpZXMvdGVzdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1742242268);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
