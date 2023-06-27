<template>
  <div class="contact text-center">
    <div class="container-fluid bg-dark text-white pt-5 pb-5">
      <h2 class="font-weight-bold mb-4">Get in Touch</h2>

      <div class="container">
        <p>
          Are you ready to take your online presence to the next level?
          Take the first step towards your dream website today by requesting a free estimate using the form below.
          We'll get back to you within 1-2 business days.
        </p>

        <b-form @submit="onSubmit">
          <div class="row">
            <div class="col-md-6">
              <b-form-group class="mb-3">
                <b-form-input
                  v-model="form.name"
                  required
                  placeholder="Your Name">
                </b-form-input>
              </b-form-group>

              <b-form-group class="mb-3">
                <b-form-input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Your Email">
                </b-form-input>
              </b-form-group>

              <b-form-group class="mb-3">
                <b-form-input
                  v-model="form.subject"
                  required
                  placeholder="Subject">
                </b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-6">
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  v-model="form.message"
                  required
                  placeholder="Message"
                  rows="5"
                  max-rows="6">
                </b-form-textarea>
              </b-form-group>
            </div>
          </div>

          <div class="row justify-content-center align-items-center">
            <b-button type="submit" variant="danger" :disabled="submitDisabled">Request Free Estimate</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      submitDisabled: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.submitDisabled = true;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://anigrams.org',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',
          Vary: 'Origin',
        },
        body: JSON.stringify({
          Name: this.form.name,
          Email: this.form.email,
          Message: this.form.message,
        }),
      };

      fetch('https://anigrams.org/Portfolio', requestOptions)
        .then(() => {
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };

          this.submitDisabled = false;

          this.$bvToast.toast('Your message has been sent.', {
            title: 'Success!',
            autoHideDelay: 5000,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
