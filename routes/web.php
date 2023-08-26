<?php

use App\Http\Controllers\Auth\LoginController;
use App\Models\pegawai;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [LoginController::class, 'showLoginForm'])->name('/');
Route::post('login_attempt', [LoginController::class, 'login'])->name('login_attempt');
Route::group(['middleware' => ['api']], function () {
    Route::get('home', function () {
        return Inertia::render('Home/Index');
    });
    Route::get('Contactinfo', function () {
        return Inertia::render('Contactinfo/Index');
    });
    Route::get('barang', function () {
        return Inertia::render('Barang/Index');
    });

    Route::get('pegawai', function () {
        $pegawai = pegawai::orderBy('id')->paginate()->appends(Request::all());
        return Inertia::render('Pegawai/index',
            [
                'filters' => Request::all('search', 'trashed'),
                'pegawai' => $pegawai,
            ]
        );
    });

    Route::get('pegawai_create', function () {
        return Inertia::render('Pegawai/form',
            ['title' => 'tambah data pegawai',
            ]
        );
    });
    Route::post('/save-contact-info', 'ContactInfoController@store');

});

Auth::routes();
