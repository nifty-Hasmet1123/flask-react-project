from flask import Flask, jsonify, request, Response
from flask_cors import CORS
# import json

app = Flask(__name__)
CORS(app)

items = [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" },
    { "id": 3, "name": "Item 3" }
]

# get method
@app.route("/api/items/", methods = ["GET"])
def get_items():
    # second argument here is the custom status code
    return jsonify(items), 200


# post method
@app.route("/api/items/", methods = ["POST"])
def add_item():
    data = request.get_json()
    item = { "id": len(items) + 1, "name": data["name"] }
    items.append(item)
    
    return jsonify(item), 201
    # you can also use this code snippet
    # response_data = json.dumps(item)
    # return Response(response_data, content_type = "application/json", status = 201)

# put method
@app.route("/api/items/<int:pk>/", methods = ["PUT"])
def update_item(pk):
    # `data` variable is used to retrieve data from an incoming http request 
    # in json format and .get_json() to parse json data from the request body.
    data = request.get_json()
    for item in items:
        if item['id'] == pk:
            item["name"] = data["name"]
            return jsonify(item)
    return jsonify({ "message": "Item not found" }), 404

# delete method
@app.route("/api/items/<int:pk>", methods = ["DELETE"])
def delete_item(pk):
    for item in items:
        if item['id'] == pk:
            items.remove(item)
            return '', 204
    return jsonify({ "message": "Item not found" }), 404


if __name__ == "__main__":
    app.run(debug = True)