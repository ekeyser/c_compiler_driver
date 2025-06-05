type TToken = {
    id: string
    value: string | number
}

enum ETokenType {
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_BRACE,
    RIGHT_BRACE,
    SEMI_COLON,
    BANG,
    BANG_EQUAL,
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


class Token {

    type
    lexeme
    literal
    line

    constructor(type: ETokenType, lexeme: string, literal: object, line: number) {

        this.type = type
        this.lexeme = lexeme
        this.literal = literal
        this.line = line
    }
}


const tokenize = (content: string) => {

    const tokens: Token[] = []
    const _s = content.split("")
    console.log(_s)
    let position = 0
    let current = 0
    let line = 0

    const advance = () => {

        return _s[position++]
    }


    const addToken = (type: ETokenType) => {

        const _token = new Token(type, "", {}, 0)
        tokens.push(_token)
    }


    const isAtEnd = () => {

        return false
    }


    const match = (expected: string) => {

        if (isAtEnd()) return false
        if (_s[current] !== expected) return false

        current++
        return true
    }


    const peek = () => {

        if (isAtEnd()) return '\0'
        return _s[current]

    }


    const scanToken = () => {

        const c = advance()

        switch (c) {

            case '(':
                return addToken(ETokenType.LEFT_PAREN)

            case ')':
                return addToken(ETokenType.RIGHT_PAREN)

            case '{':
                return addToken(ETokenType.LEFT_BRACE)

            case '}':
                return addToken(ETokenType.RIGHT_BRACE)

            case ';':
                return addToken(ETokenType.SEMI_COLON)

            case '!':
                return addToken(match('=') ? ETokenType.BANG_EQUAL : ETokenType.BANG)

            case ' ':
            case '\t':
            case '\r':
                break

            case '\n':
                line++
                break

            default:
                return new Error(`unrecognized token ${c}`)
        }

    }

    let _string = ""
    for (const _c of _s) {

        _string += _c
        scanToken()
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
console.log(tokens)
const _ast = parse_program(tokens)

console.log(_ast) 

