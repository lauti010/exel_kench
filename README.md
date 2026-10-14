# Registro de contactos

Página web en español que guarda nombre, apellido y Gmail en `data/contactos.xlsx`. Cada envío agrega una fila; el archivo tiene encabezados, filtro y primera fila fija. Los nombres se almacenan como texto, nunca como fórmulas.

## Ejecutar

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py
```

El servidor escucha en el puerto 5000. `PORT` permite cambiarlo; `EXCEL_PATH` permite cambiar la ubicación del archivo. No se necesitan claves ni servicios externos. El Excel se crea con el primer registro. Conservá el directorio `data` para mantener los contactos.

## Pruebas

```bash
.venv/bin/python -m unittest discover -s tests -v
```

La descarga incluye todos los contactos y no requiere autenticación. Esta versión sirve para uso local o de un grupo de confianza; antes de publicarla para recibir datos personales, agregá control de acceso a la descarga. Ejecutá una sola instancia para evitar escrituras simultáneas desde procesos diferentes.
