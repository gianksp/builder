window.handleAuth = async (e) => {
  e.preventDefault();
  console.log("gg");
  //   // alert("The form was submitted");

  //   var inputs = document.getElementById("signin-form").elements;
  // var inputByName = inputs["email"]
  // console.log(inputByName.value);

  //   let user = Moralis.User.current();
  //   console.log(user);
  //     if (!user) {
  //       $("#wait-link-btn").removeClass('d-none');
  //       $("#submit-link-btn").addClass('d-none');
  //       const provider = "magicLink";
  //       const props = {
  //         signingMessage: "Dappify wants to connect!",
  //         provider: provider,
  //         email: inputByName.value,
  //         apiKey: process.env.MAGIC,
  //         network: "ropsten",
  //       }
  //       user = await Moralis.authenticate(props)

  //       if (!user.get('email')) {
  //         try {
  //           user.set('email', props.email);
  //           user.set('provider', provider);
  //           await user.save();
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       }
  //       console.log("logged in user:", user);
  //       console.log(user.get("ethAddress"));

  // $('.modal-title').html('Ready to publish?');
  // $('.modal-body').html(PublishModal);
  // $('#current-email').text(user.get('email'))
  // $('#modal-view').modal('show');

  // $('#login-panel').modal('hide');
  // $('#current-email').text(props.email)
  // $('#publish-panel').modal('show');

  // $("#submit-link-btn").removeClass('d-none');
  // $("#wait-link-btn").addClass('d-none');

  // }
};

const LoginModal = () => {
  return `
        <form id="signin-form" onsubmit="handleAuth(event)">
            <div class="text-center">
            <img class="mb-4" src="./assets/img/dappify-logo-full.png" alt="" width="200" height="auto" />
            </div>
        
            <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">You will receive a magic link to complete the process</div>
            </div>
        
        
            <button id="submit-link-btn" class="w-100 btn btn-lg btn-primary" type="submit">Send me the link!</button>
            <button id="wait-link-btn" class="w-100 btn btn-lg btn-primary d-none" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Preparing link...
            </button>
        </form>
    `;
};

export default LoginModal;
