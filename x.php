<?php
header("Content-type: application/pdf");
header("Content-Disposition: attachment; filename=$pdf");
readfile($pdf);
?> 