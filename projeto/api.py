from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/bDados")
def mostrar_dados():
    conn = sqlite3.connect("bDados.db")
    cursor = conn.cursor()
    cursor.execute("SELECT nome, turno, serie, escolha1, escolha2, escolha3 FROM pessoas")
    resultados = [
        {
            "nome": row[0],
            "turno": row[1],
            "serie": row[2],
            "escolha1": row[3],
            "escolha2": row[4],
            "escolha3": row[5]
        } for row in cursor.fetchall()
    ]
    conn.close()
    return jsonify(resultados)

if __name__ == "__main__":
    app.run(port=5000)
