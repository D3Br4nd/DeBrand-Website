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

# Copy WordPress files (optional, if we want to bundle it, but usually we mount or let the entrypoint handle it)
# For now, we rely on the default behavior or volume mapping for wp-content
