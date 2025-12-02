#!/bin/sh
set -e

# Check if index.php exists in the public directory
if [ ! -f /app/public/index.php ]; then
    echo "WordPress not found in /app/public. Initializing..."
    
    # Copy WordPress core files from the backup location
    # We use cp -rn to avoid overwriting existing files (like wp-content if mapped)
    # But wait, if we map the whole root, it might be empty.
    # If the user maps ./wordpress:/app/public, and ./wordpress only has wp-content,
    # then index.php is missing.
    
    if [ -d /usr/src/wordpress ]; then
        echo "Copying WordPress core files..."
        cp -rn /usr/src/wordpress/* /app/public/
        
        # Ensure permissions
        chown -R root:root /app/public
    else
        echo "Error: /usr/src/wordpress not found. Cannot initialize."
    fi
else
    echo "WordPress already initialized."
fi

# Execute the main command (frankenphp)
exec "$@"
