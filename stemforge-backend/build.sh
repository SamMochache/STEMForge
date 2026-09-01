#!/bin/bash
echo "=== Installing Dependencies ==="
pip install -r requirements.txt

echo "=== Collecting Static Files ==="
python3.13 manage.py collectstatic --noinput --clear
