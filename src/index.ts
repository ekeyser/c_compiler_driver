type Token = {
    id: string
    value: string | number
}

type AstNode = {
    id: string
}

class Node {
}

class ProgramNode extends Node {
}

const parse_expr = (tokens: Token[]) => {


}


const parse_program = (tokens: Token[]) => {

    const Program = new ProgramNode()

    return Program
}


const parse_function = (tokens: Token[]) => {

}


const expect = (expected: Token, tokens: Token[]) => {
}


const tokenize = (content: string) => {

    const tokens: Token[] = []
    const _s = content.split("")
    console.log(_s)

    for (const _c of _s) {


    }

    return tokens
}


const content = `
int main(void)
{
    return 2;
}
`
let tokens = tokenize(content)
const _ast = parse_program(tokens)

console.log(_ast)