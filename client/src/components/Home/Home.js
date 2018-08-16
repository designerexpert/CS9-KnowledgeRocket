import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./index.css";
// import mainImg from "../../assets/HomeBanner.svg";

export default class Home extends Component {
    handleAuthRedirect = e => {
        this.props.history.push("/rocket/auth");
    };
    render() {
        return (
            <div>
                {" "}
                {/*container*/}
                <div className="Home_Banner">
                    {" "}
                    {/* Top */}
                    <div className="Home_ButtonDiv">
                        <Button
                            className="Home_Button"
                            color="primary"
                            onClick={this.handleAuthRedirect}>
                            Sign Up
                        </Button>
                        <Button
                            className="Home_Button"
                            color="primary"
                            onClick={this.handleAuthRedirect}>
                            Sign In
                        </Button>
                    </div>
                </div>{" "}
                {/* Top End */}
                <div className="Home_Content">
                    {" "}
                    {/* Main Content*/}
                    <h1>What is a Knowledge Rocket?</h1>
                    <Grid container>
                        <Card>
                            <CardMedia
                                className='(classes.media)'
                                image='./client/public/img/rocket-blast-clipart-1.jpg'
                                title='Blast Off In To Greatness!'
                            />
                            <CardContent>
                                <Typography component="p">
                                    Using Knowledge Rockets will increase your student's comprehension while making your job as a teacher easier!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary">
                                    Find Out More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div> {/* Main Content End */}
                <div className='Home_Bottom'> {/* Bottom */}
                    <footer>
                        {/* format holding text*/}
                    </footer>
                </div> {/* Bottom End */}
            </div> /*container end*/
        );
    }
}
