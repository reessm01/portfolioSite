<template>
	<div id="contactForm">
        <b-card class="padding">
		<b-form-group 
            label="Contact Form"
            label-size="lg"
            label-class="font-weight-bold pt-0"
        >
			<b-row>
                <b-form inline class="form">
                    <b-input 
                        id="name"
                        placeholder="Name"
                        class="test"
                    />
                    <b-input 
                        id="email"
                        placeholder="Email"
                    />
                </b-form>
                <b-form-textarea
                    id="about"
                    v-model="text"
                    placeholder="Tell me about your project..."
                    rows="3"
                />
                    
            </b-row>
            <b-button variant="dark" type="submit" block>Submit</b-button>
		</b-form-group>
        </b-card>
	</div>
</template>

<script>
	export default {
		name: "ContactForm"
	};
</script>

<style scoped>
    #contactForm{
        width:100%;
        margin:10px;
    }
    .padding {
        padding-left: 15px;
        padding-right: 15px;
    }
    .test {
        margin:15px 15px 15px 0px;
    }
    .form {
        margin-bottom: 15px;
    }
    button {
        margin-top: 30px;
    }
</style>
