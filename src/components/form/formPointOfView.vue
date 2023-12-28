<script setup>
import {defineProps, ref} from 'vue'

const props = defineProps(['data'])
const btn = ref(null)

</script>

<template>
  <div class="container px-0 bg-white rounded-3">
    <div class="row p-3">
      <form action="" @submit.prevent="handleSubmit">
        <div class="d-flex  justify-content-between mb-lg-3 input-resize">
          <div class="w-50 ps-lg-3"><label class="form-label" for="name">{{
              props.data.form_information.name
            }}</label><input
              id="name" class="form-control" type="text"></div>
          <div class="w-50 pe-lg-3"><label class="form-label" for="email">{{
              props.data.form_information.email
            }} </label><input
              id="email" class="form-control" type="text"></div>

        </div>
        <div><label class="form-label" for="point-of-view">{{
            props.data.form_information.point_of_view
          }}</label><textarea id="point-of-view" class="form-control"></textarea></div>
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mt-3">
          <div class="accept-rules">
            <label for="rules" class="d-flex ">
              <input id="rules" type="checkbox">
              <span class="checked"></span>
              {{ data.form_information.checked_rules }}
            </label>
          </div>
          <button ref="btn" class="btn ">{{ props.data.form_information.btn_form }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input:not([type="checkbox"]), textarea {
  background: #efefef;
}

textarea {
  resize: none !important;
  height: 135px;
}

input:focus, textarea:focus {
  box-shadow: 0 0 5px 3px #dff9fb;
  border: 1px solid #7ed6df;
  background-color: transparent;
}

.accept-rules input {
  display: none;
}

.accept-rules span {
  content: "";
  position: absolute;
  height: 25px;
  width: 25px;
  background: #efefef;
  border-radius: 3px;
  top: -2px;
  right: -30px;
  transition: 0.3s 0.5s;
  overflow: hidden;
}

.accept-rules label {
  position: relative;
  font-weight: 400;
  font-size: 12.28px;
  line-height: 19.22px;
  text-align: right;
//letter-spacing: -2.5%; margin-right: 30px;
}

.accept-rules span::after {
  position: absolute;
  content: "";
  top: 2px;
  right: 8.5px;
  border: 3px solid #ffffff;
  border-top: 0;
  border-left: 0;
  width: 7px;
  height: 17px;
  transform: translateY(-30px) rotate(40deg);
  transition: 0.7s ease-out;
//display: none;
}

.accept-rules input:checked + span {
  background-color: #5bfe8f;
  border: 1px solid #20bf6b;
  transition: 0.8s;
}

.accept-rules input:checked + span::after {
  transform: translate(0) rotate(40deg);

}

/*btn animation */

.btn {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: #095195 1px solid;
  color: #FFFFFF !important;

}

.btn:active {
  transform: scale(0.99);
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height:100%;
  right: 0;
  background-color: #095195;
  z-index: -1;
  transition: 0.5s;
}

.btn:hover {
  color: #000 !important;

}
.btn:hover::before{
  height: 0;
  animation: btn 0.5s 1;
}
/* end btn animation */
@keyframes btn {
  from {
    height:100%;
    opacity: 0;
  }
  to {
    height: 0%;
    opacity: 1;
  }
}

@media (max-width: 1199.9px) {
  .accept-rules label {
    font-size: 11px !important;
  }
}

@media (min-width: 992.1px) {
  .btn:hover::before {
    //opacity: 1;
    //width: 97%;
    //animation: btn 0.7s ease 1;
  }

}

@media (max-width: 991.9px) {
  .input-resize {
    display: block !important;
    justify-content: unset !important;
  }

  .input-resize div {
    width: 100% !important;
    margin-bottom: 0.8rem;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
  }

}

</style>