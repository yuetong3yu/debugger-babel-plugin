export function consoleTime({ types: t }) {
  return {
    name: 'consoleTime',
    visitor: {
      FunctionDeclaration: {
        enter(path) {
          const body = path.get('body')
          body.unshiftContainer(
            'body',
            t.callExpression(
              t.memberExpression(t.identifier('console'), t.identifier('time')),
              [t.stringLiteral(path.node.id.name)]
            )
          )
        },
        exit(path) {
          const blockStatment = path.get('body')
          const lastExpression = blockStatment.get('body').pop()
          const timeEndStatment = t.callExpression(
            t.memberExpression(
              t.identifier('console'),
              t.identifier('timeEnd')
            ),
            [t.stringLiteral(path.node.id.name)]
          )
          if (lastExpression.type !== 'ReturnStatement') {
            lastExpression.insertAfter(timeEndStatment)
          } else {
            lastExpression.insertBefore(timeEndStatment)
          }
        },
      },
    },
  }
}
