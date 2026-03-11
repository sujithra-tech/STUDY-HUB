from flask import Blueprint, request, jsonify
from services.youtube_service import get_transcript

transcript_bp = Blueprint("transcript", __name__)

@transcript_bp.route("/get_transcript", methods=["POST"])
def fetch_transcript():
    data = request.json
    url = data.get("url")

    transcript = get_transcript(url)

    return jsonify({
        "transcript": transcript
    })