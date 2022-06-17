$("#menuBtn").click(() => {
  if ($("#mobile-menu").hasClass("top-[-100%]")) {
    $("#mobile-menu").removeClass("top-[-100%]");
    $("#mobile-menu").addClass("top-0");
    $("#menuBtn").removeClass("fa-bars");
    $("#menuBtn").addClass("fa-times");
  } else {
    $("#mobile-menu").addClass("top-[-100%]");
    $("#mobile-menu").removeClass("top-0");
    $("#menuBtn").removeClass("fa-times");
    $("#menuBtn").addClass("fa-bars");
  }
});

// Show movies list
$(document).ready(() => {
  $.get("https://api.themoviedb.org/3/movie/popular?api_key=1d2c306bdbd50caa1c4dc11301c06f4c", (data) => {
    const results = data.results;

    results.map((result) => {
      $("#loading").addClass('hidden');
      $("#movie-list").append(
        `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
          "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
            `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
            "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
            `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
            "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
              "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
            "</div>"+
            "<div class='absolute bottom-0 left-0 w-full'>"+
              `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
            "</div>"+
          "</div>"+
        "</article>")
    })
  })
})

const checkRating = (x) => {

  let regexPattern = /^-?[0-9]+$/;
  
  let result = regexPattern.test(x);
  
  if(result) {
      return x+".0";
  }
  else {
      return x;
  }

}

// Search a movie
$("#searchBtn").click(() => {
  if($("#searchInput").val() != "") {
    $("#movie-list").empty();
    $("#loading").removeClass("hidden");

    let search = $("#searchInput").val();

    $.get(`https://api.themoviedb.org/4/search/movie?api_key=1d2c306bdbd50caa1c4dc11301c06f4c&query=${search}`, (data) => {
      const results = data.results;

      results.map((result) => {
        $("#loading").addClass('hidden');
        $("#movie-list").append(
          `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
            "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
              `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
              "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
              `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
              "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
                "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
              "</div>"+
              "<div class='absolute bottom-0 left-0 w-full'>"+
                `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
              "</div>"+
            "</div>"+
          "</article>")
      })
    })
  }
})

$("#searchInput").keypress((e) => {
  if($("#searchInput").val() != "" && e.which == 13) {
    $("#movie-list").empty();
    $("#loading").removeClass("hidden");

    let search = $("#searchInput").val();

    $.get(`https://api.themoviedb.org/4/search/movie?api_key=1d2c306bdbd50caa1c4dc11301c06f4c&query=${search}`, (data) => {
      const results = data.results;

      results.map((result) => {
        $("#loading").addClass('hidden');
        $("#movie-list").append(
          `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
            "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
              `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
              "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
              `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
              "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
                "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
              "</div>"+
              "<div class='absolute bottom-0 left-0 w-full'>"+
                `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
              "</div>"+
            "</div>"+
          "</article>")
      })
    })
  }
})

let pageNow = 1;
$("input[type=button]").click((e) => {
  let page = e.target.value;

  if(pageNow != 1 && page == "Previous") {
    $(`input[type=button][value=${pageNow}]`).removeClass("text-white bg-blue-500 hover:bg-blue-600");
    $(`input[type=button][value=${pageNow}]`).addClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
    pageNow--;
    $(`input[type=button][value=${pageNow}]`).removeClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
        $(`input[type=button][value=${pageNow}]`).addClass("text-white bg-blue-500 hover:bg-blue-600");

    $("#movie-list").empty();
    $("#loading").removeClass("hidden");
    $.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d2c306bdbd50caa1c4dc11301c06f4c&page=${pageNow}`, (data) => {
      const results = data.results;

      results.map((result) => {
        $("#loading").addClass('hidden');
        $("#movie-list").append(
          `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
            "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
              `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
              "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
              `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
              "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
                "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
              "</div>"+
              "<div class='absolute bottom-0 left-0 w-full'>"+
                `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
              "</div>"+
            "</div>"+
          "</article>")
      })
    })
  }
  else if(page === "Next") {
    $(`input[type=button][value=${pageNow}]`).removeClass("text-white bg-blue-500 hover:bg-blue-600");
    $(`input[type=button][value=${pageNow}]`).addClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
    pageNow++;
    $(`input[type=button][value=${pageNow}]`).removeClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
    $(`input[type=button][value=${pageNow}]`).addClass("text-white bg-blue-500 hover:bg-blue-600");

    $("#movie-list").empty();
    $("#loading").removeClass("hidden");
    $.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d2c306bdbd50caa1c4dc11301c06f4c&page=${pageNow}`, (data) => {
      const results = data.results;

      results.map((result) => {
        $("#loading").addClass('hidden');
        $("#movie-list").append(
          `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
            "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
              `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
              "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
              `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
              "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
                "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
              "</div>"+
              "<div class='absolute bottom-0 left-0 w-full'>"+
                `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
              "</div>"+
            "</div>"+
          "</article>")
      })
    })
  }
  else if(page != "Previous" && page != "Next") {
    $(`input[type=button][value=${pageNow}]`).removeClass("text-white bg-blue-500 hover:bg-blue-600");
    $(`input[type=button][value=${pageNow}]`).addClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
    $("#movie-list").empty();
    $("#loading").removeClass("hidden");

    pageNow = page;
    $(`input[type=button][value=${pageNow}]`).removeClass("text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700");
    $(`input[type=button][value=${pageNow}]`).addClass("text-white bg-blue-500 hover:bg-blue-600");

    $.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d2c306bdbd50caa1c4dc11301c06f4c&page=${pageNow}`, (data) => {
      const results = data.results;

      results.map((result) => {
        $("#loading").addClass('hidden');
        $("#movie-list").append(
          `<article id='${result.id}' class='w-[calc(100%/2.05)] md:w-[calc(100%/4.1)] lg:w-[calc(100%/5)] relative inline-block p-[5px]'>`+
            "<div class='poster group rounded w-full h-full relative overflow-hidden pt-[140%] cursor-pointer'>"+
              `<img src='https://image.tmdb.org/t/p/w500${result.poster_path}' alt='${result.title}' class='w-full h-full absolute object-cover mt-[-140%]'>`+
              "<div class='w-full h-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'></div>"+
              `<div class='absolute bg-white top-[5px] left-[5px] overflow-hidden rounded text-sm py-[4px] px-[6px] font-semibold'><i class='fa fa-star text-yellow-400'></i> ${checkRating(result.vote_average)}</div>`+
              "<div class='w-full h-full absolute top-[calc(50%-12px)] right-0 opacity-0 transition-all ease-in-out group-hover:opacity-100'>"+
                "<div class='bg-blue-700 w-max px-5 py-2 rounded text-white mx-auto align-middle'>Details</div>"+
              "</div>"+
              "<div class='absolute bottom-0 left-0 w-full'>"+
                `<h3 class='text-sm md:text-base p-2 text-center text-white p-[3px] bg-[rgba(0,0,0,0.45)] min-h-[35px]'>${result.title}</h3>`+
              "</div>"+
            "</div>"+
          "</article>")
      })
    })
  }
})

$(document).on('click', 'article', (e) => {
  let id = e.currentTarget.id;
  $("#movie-rating").empty();

  $.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1d2c306bdbd50caa1c4dc11301c06f4c`, (data) => {
    let l = data.spoken_languages;
    let lang = l.map((data) => {
      return data.english_name;
    })

    let genres = data.genres.map((data) => {
      return data.name;
    })

    $("#movie-poster").attr({src: `https://image.tmdb.org/t/p/w500${data.poster_path}`, alt: data.title});
    $("#movie-title").text(data.title);
    $("#movie-date").text(data.release_date);
    $("#movie-genres").text(genres.join(", "));
    $("#movie-language").text(lang.join(", "));
    $("#movie-rating").append("<i class='fa fa-star text-yellow-400'></i> "+checkRating(data.vote_average));
    $("#movie-overview").text(data.overview);
    $("#modal").removeClass("hidden")
  })
});

// Modal Close
$(".modal-close").click(() => {
  $("#modal").addClass("hidden");
});

$(window).click((e) => {
  if (e.target == document.getElementById("modal")) {
    $("#modal").addClass("hidden");
  }
});