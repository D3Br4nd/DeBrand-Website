# Get WordPress from official image
FROM wordpress:latest AS wp

FROM dunglas/frankenphp

# Install PHP extensions required for WordPress and Redis
RUN install-php-extensions \
    bcmath \
    exif \
    gd \
    intl \
    mysqli \
    opcache \
    redis \
    zip

# Set recommended PHP.ini settings
# See https://secure.php.net/manual/en/opcache.installation.php
RUN cp $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini

# Copy WordPress files from official image
COPY --from=wp /usr/src/wordpress /usr/src/wordpress

# Copy entrypoint script
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
