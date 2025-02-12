$(document).ready(function () {
    const RATE_PER_HOUR = 40;

    // Format initial rate display
    $('#ratePerHour').val(`${RATE_PER_HOUR.toFixed(2)}`);

    // Validate input when user types
    $('#hours').on('input', function () {
        const hours = parseFloat($(this).val());
        if (isNaN(hours) || hours <= 0) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    // Calculate total when button is clicked
    $('#calculateBtn').click(function () {
        const hours = parseFloat($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            $('#hours').addClass('is-invalid');
            $('#totalCost').val('');
            return;
        }

        // Calculate and display total
        const total = hours * RATE_PER_HOUR;
        $('#totalCost').val(`${total.toFixed(2)}`);
    });
});