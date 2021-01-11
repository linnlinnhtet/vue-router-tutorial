<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button class="btn btn-primary btn-block">Login</button>
            </form>
          </div>
          <div class="card-footer">
            <small>
              <span class="text-muted">Don't have an account?</span>
              <a href="#">Register</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>