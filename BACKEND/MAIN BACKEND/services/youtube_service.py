from youtube_transcript_api import YouTubeTranscriptApi
import re

def extract_video_id(url):
    pattern = r"(?:v=|\/)([0-9A-Za-z_-]{11}).*"
    match = re.search(pattern, url)
    return match.group(1) if match else None


def get_transcript(url):
    video_id = extract_video_id(url)

    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    text = " ".join([item['text'] for item in transcript])

    return text