module.exports = ({ types: t }) => ({
  name: "sre",
  visitor: {
    ArrowFunctionExpression: (path) => {
      if (
        path.parent.type === "VariableDeclarator" &&
        isCapitalized(path.parent.id.name)
      ) {
        const out = t.callExpression(t.identifier("Node"), [path.parent.init]);
        path.replaceWith(out);
      }
    },
  },
});

const isCapitalized = (word) => word[0] === word[0].toUpperCase();
