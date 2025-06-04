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

    const _match = (_s: string) => {


    }

    let _string = ""
    let position = 0
    for (const _c of _s) {

        position++
        _string += _c
        const _r = _match(_string)
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