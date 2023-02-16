import { Descriptions } from "../Descriptions";
import { Container, InputSearchComponent, Post, PublicationsContainer } from "./styles";

export function Publications() {
    const text = "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ... JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; '// foo is now a number' foo = 'bar'; '// foo is now a tring'foo = true; '// foo is now a boolean'"

    const formattedText = text.slice(0, 185) + '...';
    return (
        <Container>
            <Descriptions title="Publicações" subtitle="6 publicações" />
            <InputSearchComponent type="text" placeholder="Buscar conteúdo" />
            <PublicationsContainer>
                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>

                <Post>
                    <Descriptions
                        title="JavaScript data types and data structures"
                        subtitle="Há 1 dia"
                    />
                    <p>
                        {formattedText}
                    </p>

                </Post>
            </PublicationsContainer>
        </Container>
    )
}