import React from "react";
import {Card, CardContent, Typography, Container, Box} from "@mui/material";
import {useSelector} from "react-redux";

const Answer = () => {
    let txt = useSelector(state => state.txtR);

    return (
        <Box>
            <Container>
                <Card variant={'outlined'} style={{
                    marginTop: 35, background: 'lightgray'
                }}>
                    <CardContent>
                        <Typography variant={'h5'} component={'h2'}>
                            OpenAI robot says: <div style={{
                                fontStyle: "italic",
                                marginTop: 5
                        }}>"{txt}"</div>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default Answer