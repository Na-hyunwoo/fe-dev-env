module.exports = function myBabelPlugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind) // const

        // const => bar로 변환
        if (path.node.kind === "const") {
          path.node.kind = "var"
        }
      },
    },
  }
}