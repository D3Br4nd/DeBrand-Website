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

# Copy WordPress files
# Download and install WordPress (Italian) to a backup location
RUN apt-get update && apt-get install -y unzip wget \
    && mkdir -p /usr/src/wordpress \
    && wget https://it.wordpress.org/latest-it_IT.zip -O /tmp/wordpress.zip \
    && unzip /tmp/wordpress.zip -d /tmp \
    && cp -r /tmp/wordpress/* /usr/src/wordpress/ \
    && rm -rf /tmp/wordpress /tmp/wordpress.zip \
    && chown -R root:root /usr/src/wordpress

# Copy entrypoint script
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
