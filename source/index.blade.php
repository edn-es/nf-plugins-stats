@extends('_layouts.master')

@section('body')
<section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
    <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
        <div class="mt-8">
            <h1 id="intro-docs-template">{{ $page->siteName }}</h1>

            <h2 id="intro-powered-by-jigsaw" class="font-light mt-4">{{ $page->siteDescription }}</h2>

            <p class="text-lg">
                This webpage provides valuable information about the current plugins of Nextflow, including details on their download counts over time.
                <br class="hidden sm:block">Users can expect to find comprehensive data about each plugin, such as its purpose, features,
                compatibility with various versions of Nextflow, and usage instructions.
                <br class="hidden sm:block">Additionally, this page tracks the number of times each plugin has been downloaded since it was made available,
                giving insights into their popularity among the Nextflow community.
                <br class="hidden sm:block">For those looking to extend the functionality of their Nextflow environment or seeking new tools to optimize their workflows,
                this webpage serves as an essential resource.
            </p>

            <div class="flex my-10">
                <a href="{{ $page->baseUrl }}/docs/getting-started" title="{{ $page->siteName }} getting started" class="bg-blue-500 hover:bg-blue-600 font-normal text-white hover:text-white rounded mr-4 py-2 px-6">Get Started</a>

                <a href="https://jorge-aguilera.blog" title="My Blog" class="bg-gray-300 hover:bg-gray-600 text-blue-900 font-normal hover:text-white rounded py-2 px-6">About Jorge</a>
            </div>
            <div class="flex my-10">
                <style>
                    .libutton {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding: 7px;
                        text-align: center;
                        outline: none;
                        text-decoration: none !important;
                        color: #ffffff !important;
                        width: 200px;
                        height: 32px;
                        border-radius: 16px;
                        background-color: #0A66C2;
                        font-family: "SF Pro Text", Helvetica, sans-serif;
                    }
                </style>
                <a class="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=jagedn" target="_blank">Follow me on LinkedIn</a>
            </div>
        </div>

    </div>

    <hr class="block my-8 border lg:hidden">

</section>
@endsection
