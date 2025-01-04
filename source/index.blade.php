@extends('_layouts.master')

@section('body')
<section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
    <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
        <div class="mt-8">
            <h1 id="intro-docs-template">{{ $page->siteName }}</h1>

            <h2 id="intro-powered-by-jigsaw" class="font-light mt-4">{{ $page->siteDescription }}</h2>

            <p class="text-lg">A static site with some (hopefully) useful information of Nextflow Plugins.</p>

            <div class="flex my-10">
                <a href="/docs/getting-started" title="{{ $page->siteName }} getting started" class="bg-blue-500 hover:bg-blue-600 font-normal text-white hover:text-white rounded mr-4 py-2 px-6">Get Started</a>

                <a href="https://jorge-aguilera.blog" title="My Blog" class="bg-gray-300 hover:bg-gray-600 text-blue-900 font-normal hover:text-white rounded py-2 px-6">About Jorge</a>
            </div>
        </div>

    </div>

    <hr class="block my-8 border lg:hidden">

</section>
@endsection
