from flask import Flask, render_template, jsonify

app = Flask(__name__)

GITHUB_REPO = "https://github.com/nivyamana11/Intelligent_CICD_Pipeline"
GITHUB_ACTIONS = "https://github.com/nivyamana11/Intelligent_CICD_Pipeline/actions"
RENDER_DASHBOARD = "https://dashboard.render.com/"
RENDER_APP = "https://intelligent-cicd-pipeline.onrender.com/"
RENDER_HEALTH = "https://intelligent-cicd-pipeline.onrender.com/health"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/health")
def health():
    return jsonify({
        "status": "success",
        "message": "Intelligent CI/CD Pipeline is running!"
    })


@app.route("/api/pipeline")
def pipeline_status():
    return jsonify({

        "code": {
            "stage": "Code",
            "status": "success",
            "message": "Source code is maintained in GitHub.",
            "repository": GITHUB_REPO
        },

        "build": {
            "stage": "Build",
            "status": "success",
            "message": "GitHub Actions automatically builds the Docker image.",
            "actions": GITHUB_ACTIONS
        },

        "test": {
            "stage": "Test",
            "status": "success",
            "message": "Automated application tests are executed successfully.",
            "docker_image": "intelligent-cicd",
            "container": "cicd-app"
        },

        "deploy": {
            "stage": "Deploy",
            "status": "success",
            "message": "Application is deployed using Render.",
            "render_dashboard": RENDER_DASHBOARD,
            "application": RENDER_APP,
            "health_check": RENDER_HEALTH,
            "webhook": "Render Deploy Webhook"
        }

    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )