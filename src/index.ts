// type TToken = {
//     id: string
//     value: string | number
// }

enum ETokenType {
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_BRACE,
    RIGHT_BRACE,
    SEMI_COLON,
    BANG,
    BANG_EQUAL,
    ID,
    MAIN,
    INT,
    VOID,
    NUMBER,
    STRING_LITERAL,
}

// type AstNode = {
//     id: string
// }

class Node {
}

class ProgramNode extends Node {
}

// const parse_expr = (tokens: Token[]) => {
//
//
// }


const parse_program = (tokens: Token[]) => {

    console.log(tokens)
    const Program = new ProgramNode()

    return Program
}


// const parse_function = (tokens: Token[]) => {
//
// }


const expect = (expected: Token, tokens: Token[]) => {
}


class Token {

    type
    lexeme
    literal
    line

    constructor(type: ETokenType, lexeme: string | number, literal: object, line: number) {

        this.type = type
        this.lexeme = lexeme
        this.literal = literal
        this.line = line
    }
}


const tokenize = (content: string) => {

    const tokens: Token[] = []
    const _s = content.split("")
    let current = 0
    let line = 0

    const advance = () => {

        return _s[current++]
    }


    const addToken = (type: ETokenType, lexeme: string | number) => {

        const _token = new Token(type, lexeme, {}, line)
        tokens.push(_token)
    }


    const isAtEnd = () => {

        return current >= _s.length
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


    const _number = (_n: number) => {

        const n = peek()
        const _re = /[0-9]/g
        if (n.match(_re)) {

            current++
            return _number(parseInt(`${_n}${n}`))
        }

        return _n
    }


    const _string = (_c: string) => {

        const c = peek()
        const _re = /[a-zA-Z0-9_]/g
        if (c.match(_re)) {

            current++
            return _string(`${_c}${c}`)
        }

        return _c
    }


    const idOrKw = (lexeme: string) => {

        switch (lexeme) {

            case 'void':
                return addToken(ETokenType.VOID, _string(lexeme))

            case 'int':
                return addToken(ETokenType.INT, _string(lexeme))

            case 'main':
                return addToken(ETokenType.MAIN, _string(lexeme))

            default:
                return addToken(ETokenType.ID, _string(lexeme))
        }
    }


    const stringLiteral = (_c: string) => {

        const c = peek()
        if (c !== '"') {

            current++
            return stringLiteral(c)
        }

        return _c
    }


    const scanToken = () => {

        const c = advance()

        switch (c) {

            case '(':
                return addToken(ETokenType.LEFT_PAREN, c)

            case ')':
                return addToken(ETokenType.RIGHT_PAREN, c)

            case '{':
                return addToken(ETokenType.LEFT_BRACE, c)

            case '}':
                return addToken(ETokenType.RIGHT_BRACE, c)

            case ';':
                return addToken(ETokenType.SEMI_COLON, c)

            case '!':
                return addToken(match('=') ? ETokenType.BANG_EQUAL : ETokenType.BANG, c)

            case '"':
                return addToken(ETokenType.STRING_LITERAL, stringLiteral(c))

            case ' ':
            case '\t':
            case '\r':
                break

            case '\n':
                line++
                break

            default:
                const _reLet = /[a-zA-Z]/g
                if (c.match(_reLet)) {

                    idOrKw(_string(c))
                    // addToken(ETokenType.BANG_EQUAL, _string(c))
                }

                const _reNum = /[0-9]/g
                if (c.match(_reNum)) {

                    addToken(ETokenType.NUMBER, _number(parseInt(c)))
                }

                return new Error(`Unrecognized character:  "${c}".`)
        }

    }

    while (!isAtEnd()) {

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
const _ast = parse_program(tokens)

console.log(_ast) 

