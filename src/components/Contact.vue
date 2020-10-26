<template>
  <div class="contact text-center">
    <div class="container-fluid bg-dark text-white pt-5 pb-5">
      <h2 class="font-weight-bold mb-4">Get in Touch</h2>

      <div class="container">
        <p>
          If you like what you see, or if you would be interested in discussing possible employment opportunities,
          please contact me to schedule an interview. Thank you for your interest!
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
            <b-button type="submit" variant="danger">Send Message</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
