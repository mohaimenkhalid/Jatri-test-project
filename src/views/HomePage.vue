<template>
  <div class="row">
    <div class="col-md-8 col-12 offset-md-2 main-wrapper">
      <div class="card w-100 main-card">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <img src="https://repository-images.githubusercontent.com/106262467/4cbe6700-41c9-11ea-8860-57668b5a0ec2" width="100" />
            <h1 class="display-4 fw-bold text-uppercase">Welcome to Project</h1>
            <p class="lead ">This is a demonstration of coding test. This project build with most popular javaScript framework <span class="fw-bold">VUE JS</span></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-space-between align-items-center">
            <img class="profile-image" src="https://mohaimenkhalid.github.io/portfolio/assets/images/khalid.png" width="90" />
            <div class="line-height-0-5">
              <h6>Abdul Mohaimen Khalid</h6>
              <p class="text-muted">mohaimen707@mail.com</p>
              <p class="text-muted">01798659099</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .main-wrapper {
    justify-content: center;
    align-items: center;
    display: flex;
    min-height: 80vh;
  }

  .line-height-0-5 {
    line-height: 0.5;
  }
  .profile-image{
    margin-right: 1rem;
    border: 4px solid #41b883;
    border-radius: 3rem;
  }

  .main-card {
    background: antiquewhite !important;
  }
</style>
