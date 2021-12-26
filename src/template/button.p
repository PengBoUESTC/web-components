
<div class="tmp-container">
  <button>
    <slot name="btn-content"></slot>
  </button>
</div>

<style>
  .tmp-container {
    padding: 0.08rem;
  }

  .main {
    background:linear-gradient(318deg, #ff4f18 0%, #f10000 100%);
  }

  .success {
    background-color: #67c23a;
  }

  .error {
    background-color: #f56c6c;
  }

  .warn {
    background-color: #e6a23c;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 0.4rem;
    padding: 0 0.16rem;
    box-sizing: border-box;

    border: none;
    outline: none;

    font-size: 0.16rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;

    background: transparent;
    cursor: pointer;
    border-radius: 0.3rem;
  }
</style>
