from flask import Flask
from routes.transcript import transcript_bp

app = Flask(__name__)

app.register_blueprint(transcript_bp)

if __name__ == "__main__":
    app.run(debug=True)