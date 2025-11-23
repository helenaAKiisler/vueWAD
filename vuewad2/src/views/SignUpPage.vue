<template>
    <div class="signup">
        <h1>This is the sign-up page</h1>
        <sign-up></sign-up>
    </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue';

export default{
    name: 'SignUpPage',
    components: {
        SignUp
    }
}
</script>