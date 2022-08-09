// Defining Template Constants

const Comment = ({ image_url, author, comment }) => `
    <div class="flex flex-row my-6">
        <div class="flex-none">
            <img class="relative inline-block h-6 w-6 rounded-full ring-2 ring-white" src="${image_url}" alt="">
        </div>
        <div class="flex flex-col">
            <div class="px-4">
                <div class="text-md text-gray-800">${author} <span class="mx-2">&#8226;</span> <span class="text-xs text-gray-400">Yesterday</span></div>
            </div>
        <div class="py-2 px-4">
            <p class="text-gray-800 text-sm">
                ${comment}
            </p>
        </div>
        <div class="px-4 text-gray-600">
            <span>&#x25B2;</span>
            <span class="ml-2">Upvote</span>
            <span class="mx-6">Reply</span>
        </div>
        </div>
    </div>
`;

// Functions
function fetchComments() {
    $.get( "/comments", function(data) {
        displayComments(data.data);
    }).fail(function() {
        alert( "error" );
    })
}

function displayComments(comments) {
    $(".comments").empty();
    $('.comments').html(comments.map(Comment).join(''));
}

function submitComment() {
    const comment = $( ".comment" ).val();

    $.post("/comments", { comment: comment }, function(data) {
        $( ".comment" ).val('');
        fetchComments();
    }).fail(function() {
        alert("Error submitting comment");
    });
}

// Entry Point
$( document ).ready(function() {
    // Setup Listeners
    $( ".submit-comment" ).click(function() {
        submitComment();
    });


    fetchComments();
});