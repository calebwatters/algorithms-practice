preOrderPrint() {
  const currentNode = this.root;
  const printChildren = (node) => {
    console.log(node.data);
    for (let i=0; i<node.children.length; i++) {
      printChildren(node.children[i]);
    }
  }
  printChildren(currentNode);
}
