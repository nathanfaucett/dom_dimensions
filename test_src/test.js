var assert = require("assert"),
    domDimensions = require("../src/index");


describe("domDimensions", function() {

    function createNode(fn) {
        var node = document.createElement("div");

        node.style.position = "absolute";
        node.style.top = "0px";
        node.style.left = "0px";
        node.style.width = "100px";
        node.style.height = "100px";
        node.style.margin = "5px";
        node.style.padding = "5px";

        document.body.appendChild(node);
        try {
            fn(node);
        } finally {
            document.body.removeChild(node);
        }
    }

    describe("#top(node)", function() {
        it("should return top of node relative to viewport", function() {
            createNode(function(node) {
                assert.equal(domDimensions.top(node), 5);
            });
        });
    });

    describe("#right(node)", function() {
        it("should return right of node relative to viewport", function() {
            createNode(function(node) {
                assert.equal(domDimensions.right(node), 115);
            });
        });
    });

    describe("#bottom(node)", function() {
        it("should return top of node relative to viewport", function() {
            createNode(function(node) {
                assert.equal(domDimensions.bottom(node), 115);
            });
        });
    });

    describe("#left(node)", function() {
        it("should return left of node relative to viewport", function() {
            createNode(function(node) {
                assert.equal(domDimensions.left(node), 5);
            });
        });
    });

    describe("#width(node)", function() {
        it("should return width of node", function() {
            createNode(function(node) {
                assert.equal(domDimensions.width(node), 110);
            });
        });
    });

    describe("#height(node)", function() {
        it("should return height of node", function() {
            createNode(function(node) {
                assert.equal(domDimensions.height(node), 110);
            });
        });
    });

    describe("#outerWidth(node)", function() {
        it("should return width of node including margin", function() {
            createNode(function(node) {
                assert.equal(domDimensions.outerWidth(node), 120);
            });
        });
    });

    describe("#outerHeight(node)", function() {
        it("should return height of node including margin", function() {
            createNode(function(node) {
                assert.equal(domDimensions.outerHeight(node), 120);
            });
        });
    });
});
