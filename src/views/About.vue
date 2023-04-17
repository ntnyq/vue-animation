<template>
  <div class="about">
    <div class="card">
      <p>Hello, 我是ntnyq。</p>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .card {
    position: relative;
    max-width: 600px;
    padding: 50px 100px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 10px;
    font-size: 24px;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    user-select: none;

    @media screen and (max-width: 750px) {
      padding: 20px 50px;
      font-size: 20px;
    }
  }
}
</style>
