import React from "react";



render() {
    const { classes } = this.props;

    return (
        <Background>
            <Nav />
            <SideBar />
            <Wrapper>
                <h1>Contact Us</h1>
                <FormControl>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Message"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange('multiline')}
                            className={classes.messageField}
                            margin="normal"
                            // helperText="What can we help you with?"
                            variant="outlined"
                            width="100%"
                        />
                        <Button />
                    </form>
                </FormControl>
            </Wrapper>
            <BottomNav />
        </Background>
    )
}