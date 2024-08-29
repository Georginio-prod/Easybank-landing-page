<template>
    <div class="h-auto flex flex-col-reverse lg:flex-row justify-center items-center bg-bgc">
        <!-- Section de texte -->
        <div class="flex justify-center lg:justify-start lg:-translate-y-20 lg:pl-40 mb-8 lg:mb-0">
            <div class="flex flex-col w-[90%] lg:w-[447px] text-center lg:text-left">
                <p class="font-light text-3xl lg:text-[56px] lg:leading-[64px] lg:tracking-[-1px] text-col pb-6 pt-28">
                    Next generation digital banking
                </p>
                <h3 class="text-base lg:text-lg text-cl pb-9">
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </h3>
                <button
                    class="cursor-pointer text-white max-w-[163px] text-sm py-3 px-4 text-sx bg-gradient-to-br from-lin to-lin2 rounded-full mx-auto lg:mx-0">
                    Request Invite
                </button>
            </div>
        </div>

        <!-- Section d'image -->
        <div class="relative z-10 w-full lg:w-auto mb-8 lg:mb-0">
            <div class="overflow-hidden">
                <img src="/public/bg-intro-desktop.svg" alt="background"
                    class="transform -translate-y-24 lg:-translate-y-36 lg:translate-x-20">
            </div>
            <div class="absolute top-0 left-0 transform overflow-hidden">
                <img src="/public/image-mockups.png" alt="mockups"
                    class="transform -translate-y-10 lg:-translate-y-32 lg:translate-x-40">
            </div>
        </div>
    </div>

    <!-- Section "Why choose Easybank?" -->
    <div class="w-full bg-gris2 py-16 px-8 lg:pt-[130px] lg:pb-16 lg:px-40">
        <div class="flex flex-col items-center lg:items-start">
            <div class="flex flex-col w-full lg:w-[635px] text-center lg:text-left">
                <p class="text-col font-light text-3xl lg:text-[40px] pb-4">
                    Why choose Easybank?
                </p>
                <h3 class="text-base lg:text-xl text-cl">
                    We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.
                </h3>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 pt-12 lg:pt-[72px] w-full">
                <!-- Card 1 -->
                <div class="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <img src="/public/icon-online.svg" alt="" class="pb-10 ">
                    <p class="pb-6 text-col font-light text-2xl">
                        Online Banking
                    </p>
                    <h3 class="text-cl text-base">
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are
                        in the world.
                    </h3>
                </div>

                <!-- Card 2 -->
                <div class="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <img src="/public/icon-budgeting.svg" alt="" class="pb-10">
                    <p class="pb-6 text-col font-light text-2xl">
                        Simple Budgeting
                    </p>
                    <h3 class="text-cl text-base">
                        See exactly where your money goes each month. Receive notifications when you’re close to hitting
                        your limits.
                    </h3>
                </div>

                <!-- Card 3 -->
                <div class="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <img src="/public/icon-onboarding.svg" alt="" class="pb-10">
                    <p class="pb-6 text-col font-light text-2xl">
                        Fast Onboarding
                    </p>
                    <h3 class="text-cl text-base">
                        We don’t do branches. Open your account in minutes online and start taking control of your
                        finances right away.
                    </h3>
                </div>

                <!-- Card 4 -->
                <div class="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <img src="/public/icon-api.svg" alt="" class="pb-10">
                    <p class="pb-6 text-col font-light text-2xl">
                        Open API
                    </p>
                    <h3 class="text-cl text-base">
                        Manage your savings, investments, pension, and much more from one account. Tracking your money
                        has never been easier.
                    </h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Section "Latest Articles" -->
    <div class="flex flex-col px-8 lg:px-[165px] py-16 lg:py-20 bg-bgc">
        <p class="text-col font-light text-2xl lg:text-[40px] leading-[64px] tracking-[-0.71px] pb-10 text-center lg:text-left">
            Latest Articles
        </p>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
            <div class="flex flex-col w-full lg:w-[255px] bg-white rounded-lg">
                <img src="/public/image-currency.jpg" alt="money" class="overflow-hidden rounded-t-lg">
                <div class="px-6 pb-6">
                    <p class="text-[10px] text-cl pt-5">By Claire Robinson</p>
                    <h2 class="text-col text-base py-2">Receive money in any currency with no fees</h2>
                    <h3 class="text-[13px] text-cl tracking-[-0.29px]">The world is getting smaller and we’re becoming more mobile. So why
                        should you be forced to only receive money in a single …</h3>
                </div>
            </div>
            
            <!-- second card  -->

            <div class="flex flex-col w-full lg:w-72 bg-white rounded-lg">
                <img src="/public/image-restaurant.jpg" alt="money" class="overflow-hidden rounded-t-lg">
                <div class="px-6 pb-6">
                    <p class="text-[10px] text-cl pt-5">By Wilson Hutton</p>
                    <h2 class="text-col text-base py-2"> Treat yourself without worrying about money</h2>
                    <h3 class="text-[13px] text-cl tracking-[-0.29px]"> Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</h3>
                </div>
            </div>

             <!-- three card  -->

             <div class="flex flex-col w-full lg:w-72 bg-white rounded-lg">
                <img src="/public/image-plane.jpg" alt="money" class="overflow-hidden rounded-t-lg">
                <div class="px-6 pb-6">
                    <p class="text-[10px] text-cl pt-5">By Wilson Hutton</p>
                    <h2 class="text-col text-base py-2">Take your Easybank card wherever you go</h2>
                    <h3 class="text-[13px] text-cl tracking-[-0.29px]">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                        while you’re abroad. We’ll even show you …</h3>
                </div>
            </div>

             <!-- four card  -->

             <div class="flex flex-col w-full lg:w-72 bg-white rounded-lg">
                <img src="/public/image-confetti.jpg" alt="money" class="overflow-hidden rounded-t-lg">
                <div class="px-6 pb-6">
                    <p class="text-[10px] text-cl pt-5">By Claire Robinson</p>
                    <h2 class="text-col text-base py-2 tracking-[-0.29px]">Our invite-only Beta accounts are now live!</h2>
                    <h3 class="text-[13px] text-cl"> After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>