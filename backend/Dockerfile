ARG WORDPRESS_VERSION=6.8.3
ARG FRANKENPHP_VERSION=1.10.1-php8.4
ARG USER=www-data

FROM wordpress:$WORDPRESS_VERSION as wp
FROM dunglas/frankenphp:${FRANKENPHP_VERSION}

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    ghostscript \
    curl \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    libzip-dev \
    unzip \
    git \
    libjpeg-dev \
    libwebp-dev \
    libzip-dev \
    libmemcached-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN install-php-extensions \
    bcmath \
    exif \
    gd \
    intl \
    mysqli \
    zip \
    imagick/imagick@master \
    opcache \
    redis

# Configure PHP
RUN cp $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini
COPY php.ini $PHP_INI_DIR/conf.d/wp.ini
RUN set -eux; \
    { \
    echo 'opcache.memory_consumption=128'; \
    echo 'opcache.interned_strings_buffer=8'; \
    echo 'opcache.max_accelerated_files=4000'; \
    echo 'opcache.revalidate_freq=2'; \
    } > $PHP_INI_DIR/conf.d/opcache-recommended.ini

RUN { \
    echo 'error_reporting = E_ERROR | E_WARNING | E_PARSE | E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_COMPILE_WARNING | E_RECOVERABLE_ERROR'; \
    echo 'display_errors = Off'; \
    echo 'display_startup_errors = Off'; \
    echo 'log_errors = On'; \
    echo 'error_log = /dev/stderr'; \
    echo 'log_errors_max_len = 1024'; \
    echo 'ignore_repeated_errors = On'; \
    echo 'ignore_repeated_source = Off'; \
    echo 'html_errors = Off'; \
    } > $PHP_INI_DIR/conf.d/error-logging.ini

# Copy WordPress files
COPY --from=wp /usr/src/wordpress /usr/src/wordpress
COPY --from=wp /usr/local/etc/php/conf.d /usr/local/etc/php/conf.d/
COPY --from=wp /usr/local/bin/docker-entrypoint.sh /usr/local/bin/

WORKDIR /var/www/html
VOLUME /var/www/html/wp-content

# Patch entrypoint for FrankenPHP
RUN sed -i \
    -e 's/\[ "$1" = '\''php-fpm'\'' \]/\[\[ "$1" == frankenphp* \]\]/g' \
    -e 's/php-fpm/frankenphp/g' \
    /usr/local/bin/docker-entrypoint.sh

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Setup User and Permissions
# Note: We use 'adduser' (alpine/debian specific, frankenphp is debian based)
# Creating user if not exists (www-data usually exists)
RUN setcap CAP_NET_BIND_SERVICE=+eip /usr/local/bin/frankenphp

RUN chown -R ${USER}:${USER} /data/caddy && \
    chown -R ${USER}:${USER} /config/caddy && \
    chown -R ${USER}:${USER} /var/www/html && \
    chown -R ${USER}:${USER} /usr/src/wordpress && \
    chown -R ${USER}:${USER} /usr/local/bin/docker-entrypoint.sh

USER ${USER}

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
