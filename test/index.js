var tape = require("tape"),
    domDimensions = require("..");


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

tape("domDimensions(node) should return dimensions of node relative to viewport", function(assert) {
    createNode(function(node) {
        assert.deepEqual(domDimensions(node), {
            bottom: 115,
            height: 110,
            left: 5,
            right: 115,
            top: 5,
            width: 110
        });
        assert.end();
    });
});

tape("domDimensions #top(node) should return top of node relative to viewport", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.top(node), 5);
        assert.end();
    });
});

tape("domDimensions #right(node) should return right of node relative to viewport", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.right(node), 115);
        assert.end();
    });
});

tape("domDimensions #bottom(node) should return top of node relative to viewport", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.bottom(node), 115);
        assert.end();
    });
});

tape("domDimensions #left(node) should return left of node relative to viewport", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.left(node), 5);
        assert.end();
    });
});

tape("domDimensions #width(node) should return width of node", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.width(node), 110);
        assert.end();
    });
});

tape("domDimensions #height(node) should return height of node", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.height(node), 110);
        assert.end();
    });
});

tape("domDimensions #outerWidth(node) should return width of node including margin", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.outerWidth(node), 120);
        assert.end();
    });
});

tape("domDimensions #outerHeight(node) should return height of node including margin", function(assert) {
    createNode(function(node) {
        assert.equal(domDimensions.outerHeight(node), 120);
        assert.end();
    });
});
