const SRE_PKG_NAME = "snake-render-engine";
const NODE_FUNCTION = "__Node__";

let isImported = false;

module.exports = ({ types: t }) => ({
  name: "sre",
  visitor: {
    ArrowFunctionExpression: (path) => {
      if (
        path.parent.type === "VariableDeclarator" &&
        isCapitalized(path.parent.id.name) &&
        isImported
      ) {
        const out = t.callExpression(t.identifier(NODE_FUNCTION), [path.parent.init]);
        path.replaceWith(out);
      }
    },
    ImportDefaultSpecifier: (path) => {
      if (path.parent.source.value === SRE_PKG_NAME) {
        isImported = true;
        path.parent.specifiers.push(t.importSpecifier(t.identifier(NODE_FUNCTION), t.identifier(NODE_FUNCTION)))
      }
    },
  },
});

const isCapitalized = (word) => word[0] === word[0].toUpperCase();
