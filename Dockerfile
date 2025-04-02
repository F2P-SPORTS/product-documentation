FROM squidfunk/mkdocs-material:latest

# Install additional Python packages
RUN pip install --upgrade pymdown-extensions python-markdown-math

# Set the working directory
WORKDIR /docs

# Expose the port MkDocs will serve on
EXPOSE 8000

# Command to run the MkDocs server
# CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
